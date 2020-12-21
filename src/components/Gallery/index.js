import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Gallery({ data }) {
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
    <div className="gallery-container">
      {data.map((mediaItem, key) => {
        const number = mediaItem.number;
        return (
          <img
            loading="lazy"
            key={key}
            onClick={() => openLightboxOnSlide(number)}
            className="img"
            src={mediaItem.src}
          />
        );
      })}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={data.map((mediaItem) => {
          return <img src={mediaItem.src} />;
        })}
        slide={lightboxController.slide}
      />
    </div>
  );
}

export default Gallery;
