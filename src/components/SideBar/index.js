import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

import "./style.scss";

function SideBar({ handleCallback, handleBackButton }) {
  function handleMenu() {
    handleCallback();
  }

  return (
    <nav className="sidebar-container">
      <ul className="sidebar">
        <Link to="/" className="sidebar-link">
          <li onClick={handleMenu} className="sidebar-elemenet" href="">
            Inicio
          </li>
        </Link>
        <Link to="/bio" className="sidebar-link">
          <li onClick={handleMenu} className="sidebar-elemenet" href="">
            Bio
          </li>
        </Link>

        <Link to="/contacto" className="sidebar-link">
          <li onClick={handleMenu} className="sidebar-elemenet" href="">
            Contacto
          </li>
        </Link>
        <Link to="/documental" className="sidebar-link">
          <li onClick={handleMenu} className="sidebar-elemenet" href="">
            Documental
          </li>
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mar%C3%ADa-pirsch-8a575173/"
          onClick={handleMenu}
          className="sidebar-elemenet"
        >
          <li>Linkedin</li>
        </a>
        <a
          onClick={handleMenu}
          className="sidebar-elemenet"
          href="https://www.instagram.com/mariapirsch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Instagram</li>
        </a>
      </ul>
    </nav>
  );
}

export default SideBar;
