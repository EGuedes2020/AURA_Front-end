import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

import GlobalStylesManagement from "./GlobalStylesManagement";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStylesManagement></GlobalStylesManagement>
      <App />
    </Provider>
  </React.StrictMode>
);
