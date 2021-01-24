import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer">
      <span>
        <p>Bs. As. Argentina | © Maria Pirsch </p>
      </span>
      <div>
        <p>
          &nbsp; &nbsp;Developed by{" "}
          <a
            className="link"
            href="https://github.com/pedrokuper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@pedrokuper</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
