import React from "react";
import Sections from "../../components/Sections";
import documentary from "../../data/documentary.json";

function Documentary() {
  return (
    <>
      <Sections sections={documentary} />
    </>
  );
}

export default Documentary;
