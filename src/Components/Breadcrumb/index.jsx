import React from "react";
import "./breadcrumb.css";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ titleId }) => {
  const locations = useLocation()
    .pathname.split("/")
    .slice(1)
    .map((location) => location);

  const url = locations[0].slice(0, 1).toUpperCase() + locations[0].slice(1);

  return (
    <div className="container">
      {locations[1] ? (
        <ol className="breadcrumb flex">
          <li className="breadcrumb__link">
            <Link to="/">Home</Link>
          </li>
          <li>&Iota;</li>
          <li className="breadcrumb__link">
            <Link to={"/" + locations[0]}>{url}</Link>
          </li>
          <li>&Iota;</li>
          <li className="breadcrumb__link">
            <div>{titleId}</div>
          </li>
        </ol>
      ) : (
        <ol className="breadcrumb flex">
          <li className="breadcrumb__link">
            <Link to="/">Home</Link>
          </li>
          <li>&Iota;</li>
          <li className="breadcrumb__link">
            <div>{url}</div>
          </li>
        </ol>
      )}
    </div>
  );
};

export default Breadcrumb;
