import React from "react";
import "./breadcrumb.css";
import { NavLink, useLocation, useMatches } from "react-router-dom";

const Breadcrumb = () => {
  const url =
    useLocation().pathname.slice(1)[0].toUpperCase() +
    useLocation().pathname.slice(2);
  const locations = useLocation()
    .pathname.split("/")
    .slice(1)
    .map((location) => location);
  console.log(locations);

  return (
    <div className="container">
      <ol className="breadcrumb flex">
        <li className="breadcrumb__link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>&Iota;</li>
        <li className="breadcrumb__link">
          <NavLink to={locations[0]}>{locations[0]}</NavLink>
        </li>
        <li>&Iota;</li>
        <li className="breadcrumb__link">
          <NavLink to={useLocation().pathname}>{locations[1]}</NavLink>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
