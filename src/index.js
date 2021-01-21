import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import Documentary from "./pages/Documentary";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/bio" component={Bio} />
    <Route exact path="/contacto" component={Contact} />
    <Route path="/galeria/:sectionId" component={GalleryPage} />
    <Route exact path="/documental" component={Documentary} />
    <Route exact path="/documental/:sectionId" component={GalleryPage} />
  </Router>,
  document.getElementById("root")
);
