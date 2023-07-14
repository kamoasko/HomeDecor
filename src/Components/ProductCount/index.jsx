import React from "react";
import "./product-count.css";

const ProductCount = () => {
  return (
    <div className="count flex">
      <button className="count__item flex">-</button>
      <span className="number flex">1</span>
      <button className="count__item flex">+</button>
    </div>
  );
};

export default ProductCount;
