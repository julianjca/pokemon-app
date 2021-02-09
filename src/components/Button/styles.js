import styled from "@emotion/styled";
import { css } from "@emotion/react";

const baseCss = css`
  background-color: #f56565;
  border-radius: 0.5em;
  border: none;
  padding: 1em 1.2em;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  transition: 0.15s all ease-in-out;

  &:hover {
    background-color: #d35858;
    transition: 0.15s all ease-in-out;
  }
`;

export const StyledButton = styled.button`
  ${baseCss}
`;

export const StyledAnchorButton = styled.a`
  ${baseCss}
`;
