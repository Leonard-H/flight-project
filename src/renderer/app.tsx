import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import Router from "./Router";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

// Create main element
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

// Render components
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router />
    </Provider>
  </AppContainer>,
  mainElement
);
