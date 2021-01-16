import React from "react";
import "./style.scss";
import media from "../../data/media.json";
import Navbar from "../../components/Navbar";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import textInfo from "../../data/misc.json";

//https://fslightbox.com/react/documentation/control-slide-number
// Debería agregar index a la data de las imagenes para poder usar dsp la funcion de toggle Para que identifique el toggler con el index de la data, así se abre en donde clickeas.
// Hay que agregar captions tmb.

function GalleryPage({ match }) {
  const { sectionId } = match.params;

  function handleFilter(data) {
    const filterData = data.filter(({ id }) => {
      return id === sectionId;
    });
    return filterData;
  }

  return (
    <>
      <Navbar />
      <Gallery data={handleFilter(media)} textInfo={handleFilter(textInfo)} />
    </>
  );
}

export default GalleryPage;
