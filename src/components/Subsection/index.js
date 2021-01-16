import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Subsection({ data }) {
  const { path } = useRouteMatch();

  return (
    <>
      <div className="section-wrapper">
        {data.map((section, key) => {
          const { img, title } = section;
          return (
            <>
              <div key={key} className="section">
                <Link to={`${path}/${title.replace(/\s/g, "-")}`}>
                  <img className="img" src={img} alt={title} />
                </Link>
                <p className="title">{title.toUpperCase()}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Subsection;
