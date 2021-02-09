import React from "react";

import { StyledButton } from "./styles";

const Button = ({ onClick, children, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
