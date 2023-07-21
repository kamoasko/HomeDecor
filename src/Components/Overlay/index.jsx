import React, { useEffect, useState } from "react";
import "./overlay.css";

const Overlay = ({ children }) => {
  // let [child, setChild] = useState(false);

  // setChild((prev) => !prev);

  // useEffect(() => {
  //   setChild();
  // }, []);

  return <div className="overlay">{children}</div>;
};

export default Overlay;
