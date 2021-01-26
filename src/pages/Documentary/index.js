import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sections from "../../components/Sections";
import data from "../../data/documentarySections.json";

function Documentary() {
  return (
    <>
      <Navbar />
      <Sections sections={data} urlPath="/documental" />
      <Footer />
    </>
  );
}

export default Documentary;
