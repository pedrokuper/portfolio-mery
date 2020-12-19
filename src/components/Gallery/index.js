import React, { useState } from "react";
import media from "../../data/media.json";
import FsLightbox from "fslightbox-react";

function Gallery({ match }) {
  const mediaData = media.filter(({ id }) => id === match.params.sectionId);

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
      {mediaData.map((mediaItem) => {
        const number = mediaItem.number;
        return (
          <img
            onClick={() => openLightboxOnSlide(number)}
            className="img"
            src={mediaItem.src}
          />
        );
      })}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={mediaData.map((mediaItem) => {
          return <img src={mediaItem.src} />;
        })}
        slide={lightboxController.slide}
      />
    </div>
  );
}

export default Gallery;
