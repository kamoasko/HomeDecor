import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

function ProductCard({ productImg, productTitle, price, id }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <Link to={`/products/${id}`} className="products__card">
      <div className="products__card-image">
        <img src={productImg} />
      </div>
      <button
        onClick={() => setFavorite((prev) => !prev)}
        className="favorite flex"
      >
        {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <p className="subtitle">{productTitle}</p>
      <span className="price">{price}</span>
    </Link>
  );
}

export default ProductCard;
