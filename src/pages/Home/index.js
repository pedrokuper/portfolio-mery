import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sections from "../../components/Sections";
import data from "../../data/portfolio_data.json";

function Home() {
  return (
    <>
      <Navbar />
      <Sections sections={data} />
      <Footer />
    </>
  );
}

export default Home;
