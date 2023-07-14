import React from "react";
import "./secondary-buttons.css";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

const SecondaryButtons = ({ text, icon }) => {
  return (
    <Link className="btn1 flex">
      {icon ? (
        <>
          <BsHandbag />
        </>
      ) : (
        ""
      )}
      {text}
    </Link>
  );
};

export default SecondaryButtons;
