import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sections from "../../components/Sections";
import sections from "../../data/sections.json";

function Home() {
  return (
    <>
      <Navbar />
      <Sections sections={sections} />
      <Footer />
    </>
  );
}

export default Home;
