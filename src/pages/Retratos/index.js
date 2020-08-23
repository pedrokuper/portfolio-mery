import React from "react";
import "./style.scss";
import portraits from "../../data/portraits.json";

function Retratos() {
  console.log(portraits);
  return (
    <div>
      {portraits.map((portrait, key) => {
        return (
          <div>
            <img src={portrait.img} key={key} alt="portrait" />
          </div>
        );
      })}
    </div>
  );
}

export default Retratos;
