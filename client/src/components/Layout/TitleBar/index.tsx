import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Typography } from "../../Typography";

import { Color } from "../../../constants/color";
import { Device } from "../../../constants/device";

export const TitleBar: React.FC = () => {
  return (
    <>
      <Padding />
      <Container>
        <Link to="/">
          <Typography.Title>Reffering</Typography.Title>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${Color.MainColor};
  text-align: center;
  box-shadow: 0 0 10px ${Color.MainColor};

  padding-top: 10px;
  padding-bottom: 10px;

  @media ${Device.mobile} {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media ${Device.tablet} {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media ${Device.desktop} {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  a {
    color: ${Color.MainColor};
    text-decoration: none;
  }
`;

const Padding = styled.div`
  height: 50px;

  @media ${Device.mobile} {
    height: 61px;
  }

  @media ${Device.desktop} {
    height: 72px;
  }
`;
