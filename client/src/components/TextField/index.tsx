import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/color";

type TextFieldProps = {
  fontSize?: number;
  placeholder?: string;
  onChange?: () => void;
};

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <Input {...props} />;
};

const Input = styled.input`
  border: 1px solid ${Color.TextFieldBorder};
  border-radius: 0;

  padding: 2%;

  outline: none;

  font-size: ${(props: TextFieldProps) => props.fontSize}px;
`;
