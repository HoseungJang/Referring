import { useQuery, useMutation, QueryConfig } from "react-query";
import { AxiosInstance, AxiosResponse } from "axios";

import { useAxios } from "../contexts/axios";

import { Link, DeleteResult } from "../types";

type QueryOperationId = keyof ReturnType<typeof makeQueryApi>;
type QueryParametersType<T extends QueryOperationId> = Parameters<
  ReturnType<typeof makeQueryApi>[T]
>[0];
type QueryResponse<T extends QueryOperationId> = ReturnType<
  ReturnType<typeof makeQueryApi>[T]
> extends Promise<infer U>
  ? U
  : never;

type MutationOperationId = keyof ReturnType<typeof makeMutationApi>;
type MutationParameters<T extends MutationOperationId> = Parameters<
  ReturnType<typeof makeMutationApi>[T]
>[0];
type MutationResponse<T extends MutationOperationId> = ReturnType<
  ReturnType<typeof makeMutationApi>[T]
> extends Promise<infer U>
  ? U
  : never;

export const useApiQuery = <
  T extends QueryOperationId,
  P extends QueryParametersType<T>,
  O extends QueryConfig<AxiosResponse["data"], any>,
  R extends QueryResponse<T>
>(
  operationId: T,
  params: P,
  options?: O
) => {
  const axios = useAxios();
  const query = useQuery<R>(
    operationId,
    async () => {
      return (await makeQueryApi(axios)[operationId](params as any)) as any;
    },
    options
  );

  return query;
};

export const useApiMutation = <
  T extends MutationOperationId,
  P extends MutationParameters<T>,
  O extends QueryConfig<AxiosResponse["data"], any>,
  R extends MutationResponse<T>
>(
  operationId: T,
  params: P,
  options?: O
) => {
  const axios = useAxios();
  const [mutation, others] = useMutation<R>(async () => {
    return (await makeMutationApi(axios)[operationId](params as any)) as any;
  }, options);

  return {
    mutation,
    ...others,
  };
};

const makeQueryApi = (axios: AxiosInstance) => {
  const getLinkList = async (params: { page: number; limit: number }) => {
    const { page, limit } = params;

    return (
      await axios.get("/link/list", {
        params: {
          page,
          limit,
        },
      })
    ).data.result as Link[];
  };

  return {
    getLinkList,
  };
};

const makeMutationApi = (axios: AxiosInstance) => {
  const createLink = async (params: { link: string }) => {
    const { link } = params;

    return (
      await axios.post("/link", {
        link,
      })
    ).data.result as Link;
  };

  const updateLink = async (params: { id: number; link: string }) => {
    const { id, link } = params;

    return (
      await axios.put("/link", {
        id,
        link,
      })
    ).data.result as Link;
  };

  const removeLink = async (params: { id: number }) => {
    const { id } = params;

    return (await axios.delete(`/link/${id}`)).data.result as DeleteResult;
  };

  return {
    createLink,
    updateLink,
    removeLink,
  };
};
