import React from "react";
import "./most-popular.css";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";
import SliderButtons from "../SliderButtons";

function MostPopular() {
  return (
    <section className="popular">
      <div className="container">
        <SectionTitle text="MOST POPULAR" isLink={false} />
        <div className="popular__content">
          <ProductCard />
        </div>
        <SliderButtons />
      </div>
    </section>
  );
}

export default MostPopular;
