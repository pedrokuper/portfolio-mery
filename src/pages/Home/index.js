import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sections from "../../components/Sections";
import data from "../../data/sections.json";

function Home() {
  return (
    <>
      <Navbar />
      <Sections sections={data} urlPath="/galeria" />
      <Footer />
    </>
  );
}

export default Home;
