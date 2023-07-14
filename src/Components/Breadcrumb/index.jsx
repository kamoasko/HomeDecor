import React from "react";
import "./breadcrumb.css";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const url =
    useLocation().pathname.slice(1)[0].toUpperCase() +
    useLocation().pathname.slice(2);

  return (
    <div className="container">
      <ol className="breadcrumb flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>&Iota;</li>
        <li className="active">
          <Link to={useLocation().pathname}>{url}</Link>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
