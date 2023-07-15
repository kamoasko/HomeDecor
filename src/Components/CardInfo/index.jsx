import React from "react";
import "./card-info.css";
import Buttons from "../../Components/Buttons";

const CardInfo = () => {
  return (
    <>
      <p className="subtitle">CARD INFORMATION</p>
      <form action="" className="card__form">
        <input type="number" placeholder="CARD NUMBER" />
        <input type="date" placeholder="EXPIRY DATE" value="__ / __ / __" />
        <input type="number" placeholder="CW" />
        <Buttons text="FINISH ORDER" />
      </form>
    </>
  );
};

export default CardInfo;
