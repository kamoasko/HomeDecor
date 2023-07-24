import React from "react";
import "./checkout.css";
import Breadcrumb from "../../Components/Breadcrumb";
import PersonelInfo from "../../Components/PersonelInfo";
import CardInfo from "../../Components/CardInfo";

const Checkout = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <section className="checkout">
          <h2>CHECKOUT</h2>
          <div className="checkout__content">
            <div className="checkout__left">
              <PersonelInfo />
            </div>
            <div className="checkout__right">
              <CardInfo />
            </div>
          </div>
          <div className="personel__methods flex">
            <div className="method">
              <p className="subtitle">PAYMENT METHOD</p>
              <form className="choose">
                <label htmlFor="card">
                  <input
                    className="choose__input"
                    type="radio"
                    name="payment"
                  />
                  CARD
                </label>
                <label htmlFor="cash">
                  <input
                    className="choose__input"
                    type="radio"
                    name="payment"
                  />
                  CASH
                </label>
              </form>
            </div>
            <div className="method">
              <p className="subtitle">DELIVERY METHOD</p>
              <form className="choose">
                <label htmlFor="courier">
                  <input
                    className="choose__input"
                    type="radio"
                    name="delivery"
                  />
                  COURIER
                </label>
                <label htmlFor="pickup">
                  <input
                    className="choose__input"
                    type="radio"
                    name="delivery"
                  />
                  PICKUP
                </label>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
