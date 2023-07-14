import React from "react";
import "./slider-buttons.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SliderButtons() {
  return (
    <div className="buttons flex">
      <button className="button flex">
        <FaArrowLeft />
      </button>
      <button className="button flex">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SliderButtons;
