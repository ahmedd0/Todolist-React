import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//------------------------------------------------------------------

import App from "./app";
//------------------------------------------------------------------
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/popper.js/dist/esm/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
//------------------------------------------------------------------

//---------------------------------------------------------------------
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
