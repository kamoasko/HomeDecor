import React from "react";
import "./collections-card.css";
import { Link } from "react-router-dom";

const CollectionsCard = ({ image, title, id }) => {
  return (
    <article className="card">
      <Link to={`${id}`} className="card__image">
        <img src={image} />
      </Link>
      <Link to={`${id}`} className="card__title flex">
        {title}
      </Link>
    </article>
  );
};

export default CollectionsCard;
