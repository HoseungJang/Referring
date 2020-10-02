import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/color";

type TextFieldProps = {
  fontSize?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <Input {...props} />;
};

const Input = styled.input`
  border: 1px solid ${Color.Grey3};
  border-radius: 0;

  padding: 2%;

  outline: none;

  font-size: ${(props: TextFieldProps) => props.fontSize}px;

  ::placeholder {
    color: ${Color.Grey4};
  }
`;
