import React from "react";
import media from "../../data/media.json";
import Navbar from "../../components/Navbar";
import Gallery from "../../components/Gallery";
import galleryInfo from "../../data/galleryInformation.json";

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
      <Gallery
        data={handleFilter(media)}
        textInfo={handleFilter(galleryInfo)}
      />
    </>
  );
}

export default GalleryPage;
