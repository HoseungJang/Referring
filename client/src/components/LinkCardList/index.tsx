import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/color";

export const LinkCardList: React.FC = (props) => {
  return (
    <Containers.LinkCardList>
      <LinkCard />
      <LinkCard />
      <LinkCard />
      <LinkCard />
      <LinkCard />
      <LinkCard />
      <LinkCard />
    </Containers.LinkCardList>
  );
};

export const LinkCard: React.FC = (props) => {
  return <Containers.LinkCard></Containers.LinkCard>;
};

const Containers = {
  LinkCard: styled.div`
    height: 300px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    background-color: ${Color.White};
  `,
  LinkCardList: styled.div`
    width: 100%;
  `,
};
