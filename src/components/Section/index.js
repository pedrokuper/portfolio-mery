import React from "react";
import "./style.scss";

function Section({ title, img }) {
  return (
    <>
      <img className="section-img" src={img} alt={`${title} thumbnail`} />
      <p className="section-title">{title.toUpperCase()}</p>
    </>
  );
}

export default Section;
