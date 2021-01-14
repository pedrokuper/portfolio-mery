import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import Documentary from "./pages/Documentary";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/bio" component={Bio} />
    <Route exact path="/contacto" component={Contact} />
    <Route exact path="/seccion/:sectionId" component={GalleryPage} />
    <Route exact path="/seccion/documental" component={Documentary} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
