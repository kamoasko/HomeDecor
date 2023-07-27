import React from "react";
import "./collections-card.css";
import { Link } from "react-router-dom";

const CollectionsCard = ({ image, title, link }) => {
  return (
    <article className="card">
      <Link to={link} className="card__image">
        <img src={image} />
      </Link>
      <Link to={link} className="card__title flex">
        {title.toUpperCase()}
      </Link>
    </article>
  );
};

export default CollectionsCard;
