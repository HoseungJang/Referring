import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import * as serviceWorker from "./serviceWorker";

import { MainRouter } from "./routes";

import { AxiosContextProvider } from "./contexts/axios";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <GlobalStyle />
    <AxiosContextProvider>
      <MainRouter />
    </AxiosContextProvider>
  </>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
