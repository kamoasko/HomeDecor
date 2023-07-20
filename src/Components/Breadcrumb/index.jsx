import React from "react";
import "./breadcrumb.css";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = ({ titleId }) => {
  const locations = useLocation()
    .pathname.split("/")
    .slice(1)
    .map((location) => location);

  const url = locations[0].slice(0, 1).toUpperCase() + locations[0].slice(1);
  console.log(url);

  return (
    <div className="container">
      {locations[1] ? (
        <ol className="breadcrumb flex">
          <li className="breadcrumb__link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>&Iota;</li>
          <li className="breadcrumb__link">
            <NavLink to={"/" + locations[0]}>{url}</NavLink>
          </li>
          <li>&Iota;</li>
          <li className="breadcrumb__link">
            <div>{titleId}</div>
          </li>
        </ol>
      ) : (
        <ol className="breadcrumb flex">
          <li className="breadcrumb__link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>&Iota;</li>
          <li className="breadcrumb__link">
            <div>{url}</div>
          </li>
        </ol>
      )}
    </div>
  );

  // return (
  //   <div className="container">
  //     <ol className="breadcrumb flex">
  //       <li className="breadcrumb__link">
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //       <li>&Iota;</li>
  //       <li className="breadcrumb__link">
  //         <NavLink to={locations[0]}>{locations[0]}</NavLink>
  //       </li>
  //       <li>&Iota;</li>
  //       <li className="breadcrumb__link">
  //         <NavLink to={useLocation().pathname}>{locations[1]}</NavLink>
  //       </li>
  //     </ol>
  //   </div>
  // );
};

export default Breadcrumb;
