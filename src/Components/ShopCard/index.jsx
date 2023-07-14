import React from "react";
import "./shop-card.css";
import { GrClose } from "react-icons/gr";
import shopping from "../../assets/images/Shopping/shopping.png";
import ProductCount from "../ProductCount";

const ShopCard = () => {
  return (
    <div className="shop__card flex">
      <button className="remove">
        <GrClose />
      </button>
      <div className="shop__card-content flex">
        <div className="shop__card-image">
          <img src={shopping} />
        </div>
        <p>Grayson Premium Grey Wash Nest of Tables</p>
      </div>
      <div className="shop__card-details flex">
        <div className="color clr1"></div>
        <ProductCount />
      </div>
      <h4>140$</h4>
    </div>
  );
};

export default ShopCard;
