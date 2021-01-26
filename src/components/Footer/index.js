import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <span>Bs. As. Argentina | © Maria Pirsch</span>

        <span>
          &nbsp; &nbsp;Developed by{" "}
          <a
            className="link"
            href="https://github.com/pedrokuper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@pedrokuper</strong>
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
