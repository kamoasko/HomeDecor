import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./not-found.css";
import Nav from "../../Components/Nav";

const NotFound = () => {
  const url = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     url("/");
  //   }, 3000);
  // }, []);

  return (
    <>
      <Nav />
      <div className="not_found">
        <p>404</p>
        <p>PAGE NOT FOUND</p>
      </div>
    </>
  );
};

export default NotFound;
