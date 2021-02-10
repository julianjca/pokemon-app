/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line quotes
import styled from "@emotion/styled";

import { css, Global } from "@emotion/react";

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
`;

export const Spacing = styled.div`
  margin: ${(props) => props.margin};
`;

const globalCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html,
  body {
    margin: 0;
    background: #ffffff;
    min-height: 100%;
    font-family: Inter, Arial, sans-serif;
    font-size: 16px;
    color: #193569;
  }
`;

export const globalStyles = <Global styles={globalCss} />;

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
