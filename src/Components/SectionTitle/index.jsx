import React from "react";
import "./section-title.css";
import { Link } from "react-router-dom";

function SectionTitle({ text, isLink }) {
  return (
    <div className="section__title flex">
      <h3>{text}</h3>
      {isLink ? (
        <Link to={"/" + text.toLowerCase()} className="seeall">
          SEE ALL
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default SectionTitle;
