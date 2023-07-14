import React from "react";
import "./product-details.css";
import Breadcrumb from "../../Components/Breadcrumb";
import productDetail from "../../assets/images/Productdetails/productdetails1.png";
import Buttons from "../../Components/Buttons";
import SecondaryButtons from "../../Components/SecondaryButtons";
import SectionTitle from "../../Components/SectionTitle";
import ProductCard from "../../Components/ProductCard";
import SliderButtons from "../../Components/SliderButtons";
import ProductCount from "../../Components/ProductCount";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <section className="details">
          <div className="details__left">
            <h2>GRAYSON PREMIUM GREY WASH NEST OF TABLES</h2>
            <div className="details__image di1">
              <img src={productDetail} />
            </div>
            <div className="details__image active di2">
              <img src={productDetail} />
            </div>
            <div className="details__image di3">
              <img src={productDetail} />
            </div>
            <div className="details__image di4">
              <img src={productDetail} />
            </div>
          </div>
          <div className="details__right">
            <p className="details__right-title">
              GRAYSON PREMIUM GREY WASH NEST OF TABLES
            </p>
            <p className="details__right-info">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.{" "}
            </p>
            <div className="details__colors">COLORS</div>
            <div className="colors flex">
              <div className="color clr1"></div>
              <div className="color clr2"></div>
              <div className="color clr3"></div>
            </div>
            <ProductCount />
            <h3>140$</h3>
            <div className="details__btns flex">
              <Buttons text="BUY NOW" icon={true} />
              <SecondaryButtons text="ADD TO CART" icon={true} />
            </div>
          </div>
        </section>
        <section className="similar">
          <SectionTitle text="SIMILAR PRODUCTS" isLink={false} />
          <div className="similar__slider">
            <ProductCard />
          </div>
          <SliderButtons />
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
