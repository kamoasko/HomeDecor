import React from "react";
import "./secondary-buttons.css";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const SecondaryButtons = ({ text, icon, link }) => {
  return (
    <Link className="btn1 flex" to={link}>
      {icon ? (
        <>
          <BsCart2 />
        </>
      ) : (
        ""
      )}
      {text}
    </Link>
  );
};

export default SecondaryButtons;
