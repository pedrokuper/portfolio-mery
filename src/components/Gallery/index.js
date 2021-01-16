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

  return (
    <div className="wrapper">
      <div className="gallery-container">
        {data.map((mediaItem, key) => {
          const number = mediaItem.number;
          return (
            <>
              <img
                loading="lazy"
                key={key}
                onClick={() => openLightboxOnSlide(number)}
                className="img"
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
      {textInfo && <TextContainer textInfo={textInfo} />}
    </div>
  );
}

export default Gallery;
