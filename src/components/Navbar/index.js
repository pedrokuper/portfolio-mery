import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import SideBar from "../SideBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const { pathname } = history.location;

  function handleBackButton() {
    history.goBack();
  }

  function handleStateChange(state) {
    setIsOpen(state.isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <div className="navbar-back-arrow">
          {pathname !== "/" && <BsArrowLeft onClick={handleBackButton} />}
        </div>
        <Link to="/">
          <p>María Pirsch | Fotografía</p>
        </Link>
        <div className="burger-menu-container">
          <Menu
            isOpen={isOpen}
            onStateChange={(state) => handleStateChange(state)}
          >
            <SideBar
              handleCallback={handleCloseMenu}
              handleBackButton={handleBackButton}
            />
          </Menu>
        </div>
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
