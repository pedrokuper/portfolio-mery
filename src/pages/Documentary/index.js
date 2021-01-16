import React from "react";
import Subsection from "../../components/Subsection";
import data from "../../data/portfolio_data.json";

function Documentary() {
  const [documentary] = data;
  console.log(documentary)

  return (
    <>
      <Subsection data={documentary.subsection} />
    </>
  );
}

export default Documentary;
