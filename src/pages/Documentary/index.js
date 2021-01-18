import React from "react";
import Sections from "../../components/Sections";
import data from "../../data/documentarySections.json";

function Documentary() {
  return (
    <>
      <Sections sections={data} urlPath="/galeria/documental" />
    </>
  );
}

export default Documentary;
