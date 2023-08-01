import React, { useContext } from "react";
import "./buttons.css";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

const Buttons = ({ text, icon, link, type }) => {
  return (
    <Link type={type} className="btn flex" to={link}>
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

export default Buttons;
