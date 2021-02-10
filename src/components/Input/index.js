import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  height: 48px;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 0.375rem;
  width: ${(props) => props.fullWidth && "100%"};
  box-sizing: border-box;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
