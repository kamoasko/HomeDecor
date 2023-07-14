import React from "react";
import "./secondary-buttons.css";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

const SecondaryButtons = ({ text, icon, link }) => {
  return (
    <Link className="btn1 flex" to={link}>
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
