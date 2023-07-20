import React from "react";
import "./collections.css";
import SectionTitle from "../SectionTitle";
import CollectionSlider from "./CollectionSlider";

function Collections() {
  return (
    <section className="collections">
      <div className="container">
        <SectionTitle text="COLLECTIONS" isLink={true} />
        <CollectionSlider />
      </div>
    </section>
  );
}

export default Collections;
