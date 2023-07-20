import React from "react";
import "./most-popular.css";
import SectionTitle from "../SectionTitle";
import MostPopularSlider from "./MostPopularSlider";

function MostPopular() {
  return (
    <section className="popular">
      <div className="container">
        <SectionTitle text="MOST POPULAR" isLink={false} />
        <MostPopularSlider />
      </div>
    </section>
  );
}

export default MostPopular;
