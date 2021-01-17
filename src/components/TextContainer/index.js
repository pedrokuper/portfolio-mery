import React from "react";
import "./style.scss";

function TextContainer({ textInfo }) {
  return (
    <>
      <div>
        {textInfo.map(({ txt, url, title }) => {
          return (
            <>
              <h4 className="text-title">{title}</h4>
              <p className="text">{txt}</p>
              <a
                className="text-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Más información
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TextContainer;
