import React, { useState, useEffect } from "react";
import "./collections-card.css";

const CollectionsCard = ({ image, colTitle }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} />
      </div>
      <div className="card__title flex">{colTitle}</div>
    </div>
  );
};

export default CollectionsCard;
