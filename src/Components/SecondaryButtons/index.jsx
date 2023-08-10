import React from "react";
import "./secondary-buttons.css";
import { Link } from "react-router-dom";

const SecondaryButtons = ({ text, link }) => {
  return (
    <Link className="btn1 flex" to={link}>
      {text}
    </Link>
  );
};

export default SecondaryButtons;
