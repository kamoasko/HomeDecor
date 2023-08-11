import React, { useState } from "react";
import "./shop-card.css";
import { GrClose } from "react-icons/gr";
import ProductCount from "../ProductCount";

const ShopCard = ({
  productImg,
  productTitle,
  productPrice,
  id,
  removeFromCart,
  count,
}) => {
  const [productCount, setProductCount] = useState(count);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteFromCart = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/cart/" + id, {
        method: "DELETE",
      });

      if (res.ok) {
        // Data removed successfully
        setLoading(false);
        removeFromCart(id);
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to delete data!!!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCountChange = (newCount) => {
    setProductCount(newCount);
  };

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="shop__card flex">
      <button onClick={deleteFromCart} className="remove">
        <GrClose />
      </button>
      <div className="shop__card-content flex">
        <div className="shop__card-image">
          <img src={productImg} />
        </div>
        <p>
          {productTitle.length > 13
            ? productTitle.slice(0, 13).trimEnd() + "..."
            : productTitle}
        </p>
      </div>
      <div className="shop__card-details flex">
        <ProductCount
          countProduct={productCount}
          onCountChange={handleCountChange}
        />
      </div>
      <h4>{productPrice}$</h4>
    </div>
  );
};

export default ShopCard;
