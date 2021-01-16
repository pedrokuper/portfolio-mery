import React from "react";
import "./style.scss";
import { Link, useParams, useRouteMatch } from "react-router-dom";

function Sections({ sections }) {
  const { sectionId } = useParams();
  const { url, path } = useRouteMatch();
  return (
    <div className="section-wrapper">
      {sections.map((section, key) => {
        const { title, img } = section;
        return (
          <div key={key} className="section">
            <Link to={`/seccion/${title.toLowerCase()}`}>
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

/* 

import React from "react";
import "./style.scss";
import { Link, useParams, useRouteMatch } from "react-router-dom";

function Sections({ sections }) {
  const { sectionId } = useParams();
  const { url, path } = useRouteMatch();
  console.log("url", url, "path", path);
  return (
    <div className="section-wrapper">
      {sections.map(({ title, img }, key) => {
        const urlTitle = title.toLowerCase().replace(/\s/g, "-");
        return (
          <div key={key} className="section">
            <Link to={`/seccion/${urlTitle}/${sectionId}`}>
              <img className="img" src={img} alt={title} />
            </Link>
            <p className="title">{title.toUpperCase()}</p>
          </div>
        );
      })}
    </div>
  );
}

*/
