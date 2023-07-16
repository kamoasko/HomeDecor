import React from "react";
import "./slider-buttons.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SliderButtons() {
  return (
    <div className="buttons flex">
      <button
        onClick={() => slider?.current?.slickPrev()}
        className="prev button flex"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => slider?.current?.slickNext()}
        className="next button flex"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SliderButtons;
