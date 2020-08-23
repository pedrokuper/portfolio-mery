import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Bs. As. Argentina | © Maria Pirsch </p>
      </div>
      <div>
        <p>
          Developed by{" "}
          <a
            className="link"
            href="https://twitter.com/_pedrokuper"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_pedrokuper
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
