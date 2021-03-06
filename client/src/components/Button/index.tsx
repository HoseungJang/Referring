import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Color } from "../../constants/color";

export const Button: React.FC<{ disabled?: boolean; onClick?: () => void }> = (
  props
) => {
  const { disabled, onClick } = props;

  return (
    <Container color={disabled ? Color.Grey4 : Color.Grey1}>
      <button onClick={disabled ? undefined : () => onClick?.()}>
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

  border: 2px solid ${Color.Grey2};

  > button {
    width: 100%;
    background-color: ${Color.White};
    border: 0;
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
    color: ${(props) => (props.color ? props.color : Color.Grey1)};
  }
`;
