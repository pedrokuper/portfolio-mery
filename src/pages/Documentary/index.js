import React from "react";
import Gallery from "../../components/Gallery";
import Sections from "../../components/Sections";
import documentary from "../../data/documentary.json";

function Documentary() {
  return (
    <>
      <Sections sections={documentary} />
      {/* <Gallery /> */}
    </>
  );
}

export default Documentary;
