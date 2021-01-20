import React from "react";
import "./style.scss";

function TextContainer({ textInfo }) {
  return (
    <>
      <div>
        {textInfo.map(({ txt, url, title }) => {
          return (
            <>
              <h2 className="text-title">{title}</h2>
              <p className="text">{txt}</p>
              {url && (
                <a
                  className="text-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Más información
                </a>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default TextContainer;
