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

// Define a custom theme with updated primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#6a11cb", // Purple as the primary color
      contrastText: "#fff", // White text for contrast
    },
    secondary: {
      main: "#1e90ff", // Updated blue for secondary color
      contrastText: "#fff", // White text for better readability
    },
    background: {
      default: "#f5f5f5", // Light grey background for sections
      paper: "#ffffff", // White for card backgrounds
    },
    text: {
      primary: "#333", // Dark grey for text
      secondary: "#555", // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: "bold",
      color: "#333", // Dark grey for headers
    },
    h6: {
      fontWeight: "bold",
      color: "#1e90ff", // Use new secondary blue for card headers
    },
    body1: {
      color: "#555", // Lighter grey for body text
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
