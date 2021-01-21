import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Section from "../Section";

function Sections({ sections, urlPath }) {
  return (
    <div className="section-wrapper">
      {sections.map(({ title, img }, key) => {
        return (
          <div key={key} className="section">
            {title === "DOCUMENTAL" ? (
              <Link to={`/documental/`}>
                <Section key={key} img={img} title={title} />
              </Link>
            ) : (
              <Link to={`${urlPath}/${title.toLowerCase().replace(/\s/g, "-")}`}>
                <Section key={key} img={img} title={title} />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Sections;
