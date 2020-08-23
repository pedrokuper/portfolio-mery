import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Retratos from "./pages/Retratos";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/bio" component={Bio} />
    <Route exact path="/contacto" component={Contact} />
    <Route exact path="/galeria/retratos" component={Retratos} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
