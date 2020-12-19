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
            href="https://github.com/pedrokuper"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pedrokuper
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
