import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import TextContainer from "../TextContainer";
import "./style.scss";

function Gallery({ data, textInfo }) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const validator = textInfo.length > 0 ? "gallery-container" : "coloroto";
  const imgSize = data.length % 2 === 0 ? "img" : "uneven";
  return (
    <div className="wrapper">
      <div className={validator}>
        {data.map((mediaItem, key) => {
          const number = mediaItem.number;
          return (
            <>
              <img
                loading="lazy"
                key={key}
                onClick={() => openLightboxOnSlide(number)}
                className={imgSize}
                src={mediaItem.src}
                alt={mediaItem.id}
              />
            </>
          );
        })}
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={data.map((mediaItem) => {
            return <img src={mediaItem.src} alt={mediaItem.id} />;
          })}
          slide={lightboxController.slide}
        />
      </div>
      {textInfo && (
        <div className="text-container">
          <TextContainer textInfo={textInfo} />
        </div>
      )}
    </div>
  );
}

export default Gallery;
