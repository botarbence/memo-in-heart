import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import configureLanguageStore from "./store/language-store";
import configureUIStore from "./store/ui-store";
import configureAuthStore from "./store/auth-store";

configureLanguageStore();
configureUIStore();
configureAuthStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
