import React from "react";
import "./collections-card.css";

const CollectionsCard = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} />
      </div>
      <div className="card__title flex">{title}</div>
    </div>
  );
};

export default CollectionsCard;
