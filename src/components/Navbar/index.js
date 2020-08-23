import React from "react";
import "./style.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const navbarSections = ["Secciones", "Bio", "Contacto"];
  return (
    <nav className="navbar">
      <div className="title">
        <p>Maria Pirsch | Fotografía</p>
      </div>
      <ul className="navlinks">
        <li className="navlinks-item">Secciones</li>
        <li className="navlinks-item">Bio</li>
        <li className="navlinks-item">Contacto</li>
        <li className="navlinks-item">{<FaLinkedin />}</li>
        <li className="navlinks-item">{<FaInstagram />}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
