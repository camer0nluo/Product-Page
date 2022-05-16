import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
