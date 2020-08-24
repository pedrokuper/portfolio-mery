import React from "react";
import "./style.scss";
import portraits from "../../data/portraits.json";

function Retratos() {
  console.log(portraits);
  return (
    <div>
      {portraits.map((portrait, key) => {
        return (
          <img
            className="grid-item"
            src={portrait.img}
            key={key}
            alt={`${portrait.name}`}
          />
        );
      })}
    </div>
  );
}

export default Retratos;
