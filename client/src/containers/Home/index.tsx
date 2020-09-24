import React from "react";
import styled from "styled-components";

import { Spinner } from "../../components/Spinner";
import { Button } from "../../components/Button";

import { useInfiniteQueryWithScroll } from "../../hooks/useInfiniteQueryWithScroll";

import { Color } from "../../constants/color";

export const Home: React.FC = () => {
  const {
    data,
    isFetchingFirst,
    isFetchingMore,
    fetchTriggerElement,
  } = useInfiniteQueryWithScroll("getLinkList", 10);

  return (
    <Container>
      <div className="buttons">
        <Button>Add Link</Button>
      </div>
      <div>
        {data.map((e) => (
          <div style={{ margin: "10px", height: "100px" }}>{e.link}</div>
        ))}
        {!isFetchingFirst && fetchTriggerElement}
      </div>
      {isFetchingMore && <Spinner />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  > .buttons {
    position: sticky;
    top: 0;

    z-index: 0;

    display: flex;
    flex-direction: row;

    padding: 10px;

    background-color: ${Color.White};
  }
`;
