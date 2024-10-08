import React from "react";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureAppStore from "./redux/configureStore";

// Optionally, preload some state if needed
const preloadedState = {};

const store = configureAppStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
