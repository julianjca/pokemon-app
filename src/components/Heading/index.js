import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledHeading = styled.h1`
  font-weight: bold;
  color: inherit;

  ${(props) =>
    props.size === "xxl" &&
    css`
      font-size: 2.25rem;

      @media (min-width: ${props.theme.breakpoints.md}) {
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.size === "xl" &&
    css`
      font-size: 1.875rem;

      @media (min-width: ${props.theme.breakpoints.md}) {
        font-size: 2.25rem;
      }
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: 1.5rem;

      @media (min-width: ${props.theme.breakpoints.md}) {
        font-size: 1.875rem;
      }
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 1rem;
    `}

  & + & {
    margin-top: 15px;
  }
`;

const Heading = ({ as, children, size, ...rest }) => {
  return (
    <StyledHeading size={size} as={as} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
