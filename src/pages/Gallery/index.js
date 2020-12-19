import React, { useState } from "react";

import "./style.scss";
import FsLightbox from "fslightbox-react";
import media from "../../data/media.json";

//https://fslightbox.com/react/documentation/control-slide-number
// Debería agregar index a la data de las imagenes para poder usar dsp la funcion de toggle Para que identifique el toggler con el index de la data, así se abre en donde clickeas.
// Hay que agregar captions tmb.

function Gallery({ match }) {
  const [toggler, setToggler] = useState(false);
  const mediaData = media.filter(({ id }) => id === match.params.sectionId);

  return (
    <div>
      {mediaData.map((mediaItem) => {
        return (
          <img
            onClick={() => setToggler(!toggler)}
            className="img"
            src={mediaItem.src}
          />
        );
      })}
      <FsLightbox
        toggler={toggler}
        sources={mediaData.map((mediaItem) => {
          return <img src={mediaItem.src} />;
        })}
      />
    </div>
  );
}

export default Gallery;
