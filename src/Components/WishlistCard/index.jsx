import React from "react";
import "./wishlist-card.css";
import wishlist from "../../assets/images/Wishlist/wishlist.png";
import { AiFillHeart } from "react-icons/ai";

const WishlistCard = () => {
  return (
    <div className="wishlist">
      <div className="wishlist__content">
        <div className="wishlist__image">
          <img src={wishlist} />
        </div>
        <div className="wishlist__details">
          <p className="subtitle">Grayson Premium Grey Wash Nest of Tables</p>
          <span className="price">140$</span>
        </div>
      </div>
      <button className="wishlist__favorite flex">
        <AiFillHeart />
      </button>
    </div>
  );
};

export default WishlistCard;
