import React from "react";
import "./shopping-cart.css";
import Breadcrumb from "../../Components/Breadcrumb";
import ShopCard from "../../Components/ShopCard";
import Buttons from "../../Components/Buttons";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <section className="shopping">
          <h2>SHOPPING CART</h2>
          <div className="shopping__content">
            <div className="shopping__content-left">
              <ShopCard />
              <ShopCard />
              <ShopCard />
            </div>
            <div className="summary">
              <p>SUMMARY</p>
              <ul className="summary__det">
                <li className="summary__det-items flex">
                  <span>ITEM COUNT</span>
                  <span>4</span>
                </li>
                <li className="summary__det-items flex">
                  <span>TOTAL PRICE</span>
                  <span>460$</span>
                </li>
              </ul>
              <div className="summary__btn">
                <Buttons text="CHECKOUT" icon={false} link="/checkout" />
              </div>
            </div>
          </div>
        </section>
        <Link to="/products" className="shopping__link">
          BACK TO SHOPPING
        </Link>
      </div>
    </>
  );
};

export default ShoppingCart;
