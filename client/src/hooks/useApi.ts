import { useInfiniteQuery, useMutation, QueryConfig } from "react-query";
import { AxiosInstance, AxiosResponse } from "axios";

import { useAxios } from "../contexts/axios";

import { Link, DeleteResult } from "../types";

export type PaginatedQueryOperationId = keyof ReturnType<
  typeof makePaginatedQueryApi
>;
type PaginatedQueryParameters<T extends PaginatedQueryOperationId> = Parameters<
  ReturnType<typeof makePaginatedQueryApi>[T]
>[0];
type PaginatedQueryResponse<T extends PaginatedQueryOperationId> = ReturnType<
  ReturnType<typeof makePaginatedQueryApi>[T]
>;

type MutationOperationId = keyof ReturnType<typeof makeMutationApi>;
type MutationParameters<T extends MutationOperationId> = Parameters<
  ReturnType<typeof makeMutationApi>[T]
>[0];
type MutationResponse<T extends MutationOperationId> = ReturnType<
  ReturnType<typeof makeMutationApi>[T]
>;

export const useApiPaginatedQuery = <
  T extends PaginatedQueryOperationId,
  P extends Omit<PaginatedQueryParameters<T>, "page">,
  R extends PaginatedQueryResponse<T>
>(
  operationId: T,
  params: P
) => {
  const axios = useAxios();
  const query = useInfiniteQuery<R>(
    operationId,
    (_, after: number = 0) => {
      const request = makePaginatedQueryApi(axios)[operationId]({
        ...(params as any),
        page: after,
      });

      return (request as any).then((response: any) => response);
    },
    {
      getFetchMore: (last) => last.after ?? false,
    }
  );

  const data: R["result"] = query.data
    ? query.data.flatMap((e) => (e as any).result)
    : [];

  return {
    ...query,
    data,
  };
};

export const useApiMutation = <
  T extends MutationOperationId,
  P extends MutationParameters<T>,
  O extends QueryConfig<AxiosResponse["data"], any>,
  R extends MutationResponse<T>
>(
  operationId: T,
  options?: O
) => {
  const axios = useAxios();
  const [mutation, others] = useMutation<R, any, P>((params) => {
    const request = makeMutationApi(axios)[operationId](params as any);

    return (request as any).then((response: any) => response);
  }, options);

  return {
    execute: mutation,
    ...others,
  };
};

const makePaginatedQueryApi = (axios: AxiosInstance) => {
  const getLinkList = (params: { page: number; limit: number }) => {
    const request = axios.get("/link/list", {
      params,
    });

    return (request as any).then((response: any) => response.data) as {
      result: Link[];
      after: number | null;
    };
  };

  return {
    getLinkList,
  };
};

const makeMutationApi = (axios: AxiosInstance) => {
  const createLink = (params: Pick<Link, "name" | "link">) => {
    const request = axios.post("/link", params);

    return (request as any).then((response: any) => response.data) as {
      result: Link;
    };
  };

  const updateLink = (params: Link) => {
    const request = axios.put("/link", params);

    return (request as any).then((response: any) => response.data) as {
      result: Link;
    };
  };

  const removeLink = (params: Pick<Link, "id">) => {
    const { id } = params;

    const request = axios.delete(`/link/${id}`);

    return (request as any).then((response: any) => response.data) as {
      result: DeleteResult;
    };
  };

  return {
    createLink,
    updateLink,
    removeLink,
  };
};
