import React from "react";
import "./collections.css";
import SectionTitle from "../SectionTitle";
import SliderButtons from "../SliderButtons";

function Collections() {
  return (
    <section className="collections">
      <div className="container">
        <SectionTitle text="COLLECTIONS" isLink={true} />
        <div className="collections__content"></div>
        <SliderButtons />
      </div>
    </section>
  );
}

export default Collections;
