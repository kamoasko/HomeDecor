import React, { useEffect, useState } from "react";
import "./shopping-cart.css";
import Breadcrumb from "../../Components/Breadcrumb";
import ShopCard from "../../Components/ShopCard";
import Buttons from "../../Components/Buttons";
import { Link } from "react-router-dom";
import useFetchData from "../../Components/UseFetchData/useFetchData";

const ShoppingCart = () => {
  const { data: cartProducts, loading, error } = useFetchData("/cart");
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = async () => {
    const res = await fetch("http://localhost:5000/cart");
    if (res.ok) {
      const data = await res.json();
      const totalPrice = data.reduce(
        (acc, product) => acc + parseInt(product.price * product.count),
        0
      );
      setTotalPrice(totalPrice);
    }
  };

  const calculateTotalCount = () => {
    const apiUrl = "http://localhost:5000/cart?_page=1";

    // Fetch the product data and get the count from the headers
    fetch(apiUrl)
      .then((response) => {
        // Get the total count from the response headers
        const totalCount = response.headers.get("X-Total-Count");
        if (totalCount) {
          // Convert the total count to an integer and set the state
          const count = parseInt(totalCount, 10);
          setProductCount(count);
        }
      })
      .catch((error) => {
        console.error("Error loading product data:", error);
      });
  };

  const removeFromCart = (id) => {
    setCartProducts((prevCart) => prevCart.filter((cart) => cart.id !== id));
    calculateTotalCount();
  };

  useEffect(() => {
    calculateTotalCount();
    calculateTotalPrice();
  }, [cartProducts]);

  if (loading) {
    return <h3>LOADING......</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

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
                    count={product.count}
                    calculateTotalPrice={calculateTotalPrice}
                  />
                ))
              ) : (
                <p>There is no product in the shopping cart.</p>
              )}
            </div>
            <div className="summary">
              <p>SUMMARY</p>
              <ul className="summary__det">
                <li className="summary__det-items flex">
                  <span>ITEM COUNT</span>
                  <span>{productCount}</span>
                </li>
                <li className="summary__det-items flex">
                  <span>TOTAL PRICE</span>
                  <span>{totalPrice}$</span>
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
