import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Sections({ sections }) {
  return (
    <div className="section-wrapper">
      {sections.map(({ title, img }) => {
        //Desestructura el objeto y por eso lo puedo usar sin usar sections.title, sections.img
        return (
          <div className="section">
            <Link to={`/seccion/${title.toLowerCase().replace(/\s/g, "-")}`}>
              <img className="img" src={img} alt={title} />
            </Link>
            <p className="title">{title.toUpperCase()}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sections;
