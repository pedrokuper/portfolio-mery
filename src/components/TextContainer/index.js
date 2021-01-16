import React from "react";

function TextContainer({ textInfo }) {
  console.log(textInfo);
  return (
    <>
      <div>
        {textInfo.map(({ txt, url }) => {
          return (
            <>
              <p>{txt}</p>
              <a href={url}>Link a la nota</a>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TextContainer;
