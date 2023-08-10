import React, { useEffect, useState } from "react";
import "./product-details.css";
import Breadcrumb from "../../Components/Breadcrumb";
import Buttons from "../../Components/Buttons";
import SecondaryButtons from "../../Components/SecondaryButtons";
import SectionTitle from "../../Components/SectionTitle";
import ProductCount from "../../Components/ProductCount";
import { Outlet, useParams } from "react-router-dom";
import SimilarSlider from "./SimilarSlider";
import { BsCart2 } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products/" + id);
      if (res.ok) {
        const data = await res.json();
        setProducts(() => data);
        setLoading(false);
      } else {
        setLoading(false);
        throw Error("Network error!!!");
      }
    } catch (e) {
      setError(() => e.message);
    }
  };

  const addToCart = async () => {
    let newData = {
      id: id,
      image: products.image,
      title: products.title,
      desc: products.desc,
      price: products.price,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (res.ok) {
        // Data added successfully
        setLoading(false);
        console.log("Data added successfully!");
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to add data!!!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <Breadcrumb titleId={products.title} />
      <div className="container">
        <section className="details">
          <div className="details__left">
            <h2>{products.title}</h2>
            <div className="details__image di1">
              <img src={products.image} />
            </div>
            <div className="details__image active di2">
              <img src={products.image} />
            </div>
            <div className="details__image di3">
              <img src={products.image} />
            </div>
            <div className="details__image di4">
              <img src={products.image} />
            </div>
          </div>
          <div className="details__right">
            <p className="details__right-title">{products.title}</p>
            <p className="details__right-info">{products.desc}</p>
            <div className="details__colors">COLORS</div>
            <div className="colors flex">
              <div className="color clr1"></div>
              <div className="color clr2"></div>
              <div className="color clr3"></div>
            </div>
            <ProductCount />
            <h3>{products.price}</h3>
            <div className="details__btns flex">
              <Buttons text="BUY NOW" icon={true} link="/checkout" />
              <button onClick={addToCart} className="btn1 flex">
                <BsCart2 /> ADD TO CART
              </button>
            </div>
          </div>
        </section>
        <section className="similar">
          <SectionTitle text="SIMILAR PRODUCTS" isLink={false} />
          <SimilarSlider />
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default ProductDetails;
