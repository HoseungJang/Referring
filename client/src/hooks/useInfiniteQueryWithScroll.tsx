import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { PaginatedQueryOperationId, useApiPaginatedQuery } from "./useApi";

export const useInfiniteQueryWithScroll = (
  operationId: PaginatedQueryOperationId,
  count: number
) => {
  const query = useApiPaginatedQuery(operationId, { limit: count });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !query.isFetchingMore && query.canFetchMore) {
      query.fetchMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return {
    data: query.data,
    isFetchingFirst: query.isFetching && !query.isFetchingMore,
    isFetchingMore: query.isFetching,
    fetchTriggerElement: <div ref={ref}></div>,
  };
};
