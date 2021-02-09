/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line quotes
import styled from "@emotion/styled";

import { css, Global } from "@emotion/react";

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
`;

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        background: #ffffff;
        min-height: 100%;
        font-family: Inter, Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
);

export const theme = {
  colors: {
    primary: "#193569",
    tertiary: "#152c57",
    background: "#ffffff",
    secondary: "#FDC903",
  },
  breakpoints: {
    xxs: "350px",
    xs: "420px",
    md: "720px",
    lg: "900px",
    xl: "1000px",
    xxl: "1200px",
    xxxl: "1400px",
  },
  fonts: {
    primary: "Inter, sans-serif",
  },
};
