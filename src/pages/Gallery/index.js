import React, { useState } from "react";

import "./style.scss";
import media from "../../data/media.json";

function Gallery({ match }) {
  const mediaData = media.filter(({ id }) => id === match.params.sectionId);

  return (
    <div className="">
      {mediaData.map((mediaItem) => {
        return <img className="img" loading="lazy" src={mediaItem.src} />;
      })}
    </div>
  );
}

export default Gallery;
