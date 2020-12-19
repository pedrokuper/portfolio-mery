import React, { useState } from "react";
import "./style.scss";
import FsLightbox from "fslightbox-react";
import media from "../../data/media.json";
import Navbar from "../../components/Navbar";

//https://fslightbox.com/react/documentation/control-slide-number
// Debería agregar index a la data de las imagenes para poder usar dsp la funcion de toggle Para que identifique el toggler con el index de la data, así se abre en donde clickeas.
// Hay que agregar captions tmb.

function Gallery({ match }) {
  // const [toggler, setToggler] = useState(false);
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
      <Navbar />
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
