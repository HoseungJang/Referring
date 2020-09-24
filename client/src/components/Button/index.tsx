import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Color } from "../../constants/color";
import { Device } from "../../constants/device";

export const Button: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <div className="wrap-content">{props.children}</div>
    </Container>
  );
};

export const LinkButton: React.FC<{ path: string }> = (props) => {
  return (
    <Container>
      <Link to={props.path}>
        <div className="wrap-content">{props.children}</div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  text-align: center;

  > a {
    width: 100%;

    border: 2px solid ${Color.ButtonBorder};
    color: ${Color.MainColor};
    text-decoration: none;
  }

  .wrap-content {
    padding: 10px;
  }
`;
