import styled from "@emotion/styled";
import { css } from "@emotion/react";

const baseCss = css`
  background: #f56565;
  border-radius: 0.5em;
  border: none;
  padding: 1em 1.2em;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
`;
export const StyledButton = styled.button`
  ${baseCss}
`;

export const StyledAnchorButton = styled.a`
  ${baseCss}
`;
