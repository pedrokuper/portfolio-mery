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
            <Link to={`/galeria/${title.toLowerCase()}`}>
              <img className="img" src={img} />
            </Link>
            <p className="title">{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sections;
