import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

import App from "./App";
import { SpaceGroteskRegular } from "./assets/fonts";
import { theme } from "./styles";

const fonts = css`
  @font-face {
    font-family: "SpaceGrotesk";
    font-style: normal;
    font-weight: 400;
    src:
      url(${SpaceGroteskRegular}) format("truetype"),
    font-display: swap;
  }

  @font-face {
    font-family: "Castledown";
    src: url("/fonts/castledown-heavy.eot");
    src:
      url("/fonts/castledown-heavy.eot#iefix") format("embedded-opentype"),
      url("/fonts/castledown-heavy.woff2") format("woff2"),
      url("/fonts/castledown-heavy.woff") format("woff"),
      url("/fonts/castledown-heavy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

const resetStyles = css`
  html,
  body {
    overflow-x: hidden;
  }
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background-color: ${theme.colors.background.dark};
    color: white;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    height: 100%;
  }
`;

const CustomStyles = createGlobalStyle`
  ${fonts}
  ${resetStyles}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CustomStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
