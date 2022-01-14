import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/aladin/400.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/700.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
