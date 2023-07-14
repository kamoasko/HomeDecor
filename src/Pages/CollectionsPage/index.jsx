import React from "react";
import "./collection-page.css";
import Breadcrumb from "../../Components/Breadcrumb";
import SectionTitle from "../../Components/SectionTitle";
import CollectionsCard from "../../Components/CollectionsCard";

const CollectionsPage = () => {
  return (
    <>
      <Breadcrumb />
      <section className="collection">
        <div className="container">
          <h2>COLLECTIONS</h2>
          <p className="collection__info">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime.
          </p>
          <div className="collection__content">
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
            <CollectionsCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsPage;
