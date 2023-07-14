import React from "react";
import "./product-card.css";
import product from "../../assets/images/Products/products1.png";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

function ProductCard() {
  return (
    <Link
      to="grayson-premium-grey-wash-nest-of-tables"
      className="products__card"
    >
      <div className="products__card-image">
        <img src={product} />
      </div>
      <button className="favorite flex">
        <AiOutlineHeart />
      </button>
      <p className="subtitle">Grayson Premium Grey Wash Nest of Tables</p>
      <span className="price">140$</span>
    </Link>
  );
}

export default ProductCard;
