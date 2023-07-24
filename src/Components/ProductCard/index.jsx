import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

function ProductCard({ productImg, productTitle, price, id }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="product__main">
      <button
        onClick={() => setFavorite((prev) => !prev)}
        className="favorite flex"
      >
        {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <Link className="products__card" to={`/products/${id}`}>
        <div className="products__card-image">
          <img src={productImg} />
        </div>
        <p className="subtitle">{productTitle}</p>
        <span className="price">{price}</span>
      </Link>
    </div>
  );
}

export default ProductCard;
