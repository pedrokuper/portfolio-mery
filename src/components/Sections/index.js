import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Sections({ sections }) {
  return (
    <div className="section-wrapper">
      {sections.map((section, key) => {
        const { title, img } = section;
        return (
          <div key={key} className="section">
            <Link to={`/galeria/${title.toLowerCase()}`}>
              <img className="img" src={img} alt="" />
            </Link>
            <p className="title">{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sections;

