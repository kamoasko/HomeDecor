import React from "react";
import "./products.css";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";

function Products() {
  return (
    <section className="products ">
      <div className="container">
        <SectionTitle text="PRODUCTS" isLink={true} />
        <div className="products__content">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default Products;
