import React from "react";
import "./discount.css";
import { FaShoppingBag } from "react-icons/fa";
import discount from "../../assets/images/Discount/Discount.png";
import Buttons from "../Buttons";

const disc = { backgroundImage: `url(${discount})` };

function Discount() {
  return (
    <section style={disc} className="discount flex">
      <h2>20% DISCOUNT</h2>
      <p>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo{" "}
      </p>
      <div className="shop">
        <Buttons text="SHOP NOW" icon={true} />
      </div>
    </section>
  );
}

export default Discount;
