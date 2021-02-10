import styled from "@emotion/styled";
import { css } from "@emotion/react";

const baseCss = (props) => css`
  background-color: ${props.theme.colors.primary};
  border-radius: 0.5em;
  border: none;
  padding: 1em 1.2em;
  font-size: 1rem;
  font-weight: bold;
  color: ${props.theme.colors.secondary};
  cursor: pointer;
  transition: 0.15s all ease-in-out;
  outline: none;
  width: ${props.fullWidth && "100%"};

  &:hover {
    background-color: ${props.theme.colors.tertiary};
    transition: 0.15s all ease-in-out;
  }
`;

export const StyledButton = styled.button`
  ${baseCss}
`;

export const StyledAnchorButton = styled.a`
  ${baseCss}
`;
