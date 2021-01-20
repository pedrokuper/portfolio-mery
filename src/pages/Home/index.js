import React, { useEffect } from "react";
import { encode } from "base-64";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sections from "../../components/Sections";
import data from "../../data/sections.json";

function Home() {
  const api_key = process.env.REACT_APP_CLOUD_API_KEY;
  const api_secret = process.env.REACT_APP_CLOUD_API_SECRET;
  const CLOUD = process.env.REACT_APP_CLOUDINARY_URL;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const URL = `https://api.cloudinary.com/v1_1/pedrokuper/folders`;
    const options = {
      method: "GET",
      headers: {
        Authorization: "Basic " + encode(api_key + ":" + api_secret),
        "Content-Type": "application/json",
      },
    };
    const data = await fetch(URL, options);
    const json = await data.json();
    console.log(json);
  }

  return (
    <>
      <Navbar />
      <Sections sections={data} urlPath="/galeria" />
      <Footer />
    </>
  );
}

export default Home;
