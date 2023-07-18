import React, { useState, useEffect } from "react";
import "./collections-card.css";

const CollectionsCard = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getColData = async () => {
    try {
      const res = await fetch("http://localhost:5000/collections");
      if (res.ok) {
        const colData = await res.json();
        setCollections(() => colData);
      }
    } catch (e) {
      setError(() => e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getColData().then();
  }, []);

  // const loginBg = { backgroundImage: `url(${auth.image})` };

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      {collections &&
        collections.map((collection) => (
          <div className="card" key={collection.id}>
            <div className="card__image">
              <img src={collection.image} />
            </div>
            <div className="card__title flex">{collection.title}</div>
          </div>
        ))}
    </>
  );
};

export default CollectionsCard;
