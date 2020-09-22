import React from "react";

import { Spinner } from "../../components/Spinner";

import { useInfiniteQueryWithScroll } from "../../hooks/useInfiniteQueryWithScroll";

export const Home: React.FC = () => {
  const {
    data,
    isFetchingFirst,
    isFetchingMore,
    fetchTriggerElement,
  } = useInfiniteQueryWithScroll("getLinkList", 10);

  return (
    <>
      <div>
        {data.map((e) => (
          <div style={{ margin: "10px", height: "100px" }}>{e.link}</div>
        ))}
        {!isFetchingFirst && fetchTriggerElement}
      </div>
      {isFetchingMore && <Spinner />}
    </>
  );
};
