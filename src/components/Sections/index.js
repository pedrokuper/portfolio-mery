import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Sections(props) {
  const { sections } = props;

  return (
    <div className="section-wrapper">
      {sections.map((section) => {
        return (
          <div className="section">
            <Link to={`/galeria/${section.title.toLowerCase()}`}>
              <img className="img" src={section.img} />
            </Link>
            <p className="title">{section.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sections;
