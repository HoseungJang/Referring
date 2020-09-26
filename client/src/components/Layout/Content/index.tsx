import React from "react";
import styled from "styled-components";

import { Device } from "../../../constants/device";

export const Content: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 50px;

  @media ${Device.mobile} {
    padding: 0 10px;
    top: 61px;
  }

  @media ${Device.tablet} {
    padding: 0 30px;
    top: 66px;
  }

  @media ${Device.desktop} {
    padding: 0 50px;
    top: 72px;
  }

  left: 0;
  right: 0;
  bottom: 0;

  overflow-y: scroll;
`;
