import React, { useEffect, useState } from "react";
import "./discount.css";
import Buttons from "../Buttons";

function Discount() {
  const [discount, setDiscount] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getDiscount = async () => {
    try {
      const res = await fetch("http://localhost:5000/discount");
      if (res.ok) {
        const discountImage = await res.json();
        setDiscount(() => discountImage);
      }
    } catch (e) {
      setError(() => e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDiscount().then();
  }, []);

  const disc = { backgroundImage: `url(${discount.image})` };

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <section style={disc} className="discount flex">
      <h2>{discount.sale} DISCOUNT</h2>
      <p>{discount.desc}</p>
      <div className="shop">
        <Buttons text="SHOP NOW" icon={true} link="/products" />
      </div>
      <div className="discount__blur"></div>
    </section>
  );
}

export default Discount;
