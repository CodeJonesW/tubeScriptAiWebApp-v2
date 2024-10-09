import React from "react";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureAppStore from "./redux/configureStore";

// Optionally, preload some state if needed
const preloadedState = {};

const store = configureAppStore(preloadedState);

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d1f2d", // Rich Black as the primary color
      contrastText: "#fae1df", // Misty Rose for contrast on primary elements
    },
    secondary: {
      main: "#546a7b", // Payne's Gray as secondary color
      contrastText: "#e4c3ad", // Desert Sand for contrast
    },
    background: {
      default: "#0d1f2d", // Rich Black for the default background
      paper: "#222b32", // Payne's Gray for card and paper backgrounds
    },
    text: {
      primary: "#fae1df", // Misty Rose for primary text (light color on dark background)
      secondary: "#e4c3ad", // Desert Sand for secondary text
    },
    action: {
      hover: "#9ea3b0", // Cadet Gray for hover state
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      color: "#fae1df",
    },
    h2: {
      fontWeight: "bold",
      color: "#fae1df",
    },
    h3: {
      fontWeight: "bold",
      color: "#fae1df",
    },
    h4: {
      fontWeight: "bold",
      color: "#fae1df",
    },
    h5: {
      fontWeight: "bold",
      color: "#fae1df",
    },
    body1: {
      color: "#e4c3ad",
    },
    button: {
      textTransform: "none",
      color: "#fae1df",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
