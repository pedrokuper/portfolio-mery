import React, { useState } from "react";
import "./style.scss";
import FsLightbox from "fslightbox-react";
import media from "../../data/media.json";
import Navbar from "../../components/Navbar";
import Gallery from "../../components/Gallery";

//https://fslightbox.com/react/documentation/control-slide-number
// Debería agregar index a la data de las imagenes para poder usar dsp la funcion de toggle Para que identifique el toggler con el index de la data, así se abre en donde clickeas.
// Hay que agregar captions tmb.

function GalleryPage(props) {
  const { sectionId } = props.match.params;
  const mediaData = media.filter(({ id }) => id === sectionId);

  return (
    <>
      <Navbar />
      <Gallery data={mediaData} />
    </>
  );
}

export default GalleryPage;
