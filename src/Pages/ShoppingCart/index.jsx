import React, { useEffect, useState } from "react";
import "./shopping-cart.css";
import Breadcrumb from "../../Components/Breadcrumb";
import ShopCard from "../../Components/ShopCard";
import Buttons from "../../Components/Buttons";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getCartProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/cart");

      if (res.ok) {
        // Data fetched successfully
        const data = await res.json();
        setCartProducts(() => data);
        setLoading(false);
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to fetch data!!!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const removeFromCart = (id) => {
    setCartProducts((prevCart) => prevCart.filter((cart) => cart.id !== id));
  };

  useEffect(() => {
    getCartProduct();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="container">
        <section className="shopping">
          <h2>SHOPPING CART</h2>
          <div className="shopping__content">
            <div className="shopping__content-left">
              {cartProducts.length ? (
                cartProducts.map((product) => (
                  <ShopCard
                    key={product.id}
                    id={product.id}
                    productImg={product.image}
                    productTitle={product.title}
                    productPrice={product.price}
                    removeFromCart={removeFromCart}
                  />
                ))
              ) : (
                <p>There is no any product in the shopping cart</p>
              )}
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
