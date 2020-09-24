import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Color } from "../../constants/color";

export const Button: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <button>
        <div className="wrap-content">{props.children}</div>
      </button>
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
  display: flex;
  justify-content: center;

  border: 2px solid ${Color.ButtonBorder};

  > button {
    width: 100%;
    background-color: ${Color.White};
    border: 0;
    text-decoration: none;
    outline: none;
  }

  > a {
    width: 100%;
    text-decoration: none;
  }

  .wrap-content {
    display: flex;
    justify-content: center;
    padding: 10px;
    color: ${Color.MainColor};
  }
`;
