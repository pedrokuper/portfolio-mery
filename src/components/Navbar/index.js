import React from "react";
import "./style.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <p>María Pirsch | Fotografía</p>
        </Link>
      </div>
      <div>
        <p></p>
      </div>
      <ul className="navlinks">
        <Link to="/bio">
          <li className="navlinks-item">Bio</li>
        </Link>
        <Link to="/contacto">
          <li className="navlinks-item">Contacto</li>
        </Link>
        <a
          className="navbar-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mar%C3%ADa-pirsch-8a575173/"
        >
          <li className="navlinks-item">{<FaLinkedin />}</li>
        </a>
        <a
          className="navbar-link"
          href="https://www.instagram.com/mariapirsch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="navlinks-item">{<FaInstagram />}</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
