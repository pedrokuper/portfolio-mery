import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import Bio from "./components/Biography";
import sections from "./data/sections.json";

function App() {
  return (
    <>
      <Navbar />
      <Sections sections={sections} />
      <Footer />
    </>
  );
}

export default App;
