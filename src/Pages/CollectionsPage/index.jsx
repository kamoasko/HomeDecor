import React, { useEffect, useState } from "react";
import "./collection-page.css";
import Breadcrumb from "../../Components/Breadcrumb";
import CollectionsCard from "../../Components/CollectionsCard";

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getColData = async () => {
    try {
      const res = await fetch("http://localhost:5000/collections");
      if (res.ok) {
        const colData = await res.json();
        setCollections(() => colData);
        setLoading(false);
      } else {
        setLoading(false);
        throw Error("Network error!!!");
      }
    } catch (e) {
      setError(() => e.message);
    }
  };

  useEffect(() => {
    getColData();
  }, []);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

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
            {collections.length &&
              collections.map((collection) => {
                return (
                  <CollectionsCard
                    image={collection.image}
                    title={collection.colTitle}
                    link={`${collection.id}`}
                    key={collection.id}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsPage;
