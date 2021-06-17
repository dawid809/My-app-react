import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";

import MainPage from "./components/mainPage/MainPage";
import store from "./tools/store";
import "../src/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
