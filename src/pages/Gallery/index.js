import React, { useState } from "react";
import "./style.scss";
import media from "../../data/media.json";

function Gallery({ match }) {
  const mediaData = media.filter(({ id }) => id === match.params.sectionId);

  return (
    <div>
      {media
        .filter(({ id }) => id === match.params.sectionId)
        .map((mediaItem) => {
          return <img src={mediaItem.src} />;
        })}
    </div>
  );
}

export default Gallery;
