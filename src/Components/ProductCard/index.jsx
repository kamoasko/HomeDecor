import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

function ProductCard({ productImg, productTitle, price }) {
  return (
    <Link to="/products/:id" className="products__card">
      <div className="products__card-image">
        <img src={productImg} />
      </div>
      <button className="favorite flex">
        <AiOutlineHeart />
      </button>
      <p className="subtitle">{productTitle}</p>
      <span className="price">{price}</span>
    </Link>
  );
}

export default ProductCard;
