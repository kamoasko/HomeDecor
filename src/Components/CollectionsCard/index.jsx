import React from "react";
import "./collections-card.css";
import collection from "../../assets/images/Collections/collections.png";

const CollectionsCard = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={collection} />
      </div>
      <div className="card__title flex">BEDROOM</div>
    </div>
  );
};

export default CollectionsCard;
