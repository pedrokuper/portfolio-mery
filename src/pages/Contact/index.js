import React from "react";
import Navbar from "../../components/Navbar";
import "./style.scss";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
        <a
          className="contact-text"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mariapirsch@gmail.com"
          target="_blank "
          rel="noopener noreferrer"
        >
          pirschmaria@gmail.com
        </a>
      </div>
    </>
  );
}

export default Contact;
