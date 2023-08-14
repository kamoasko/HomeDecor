import React, { useEffect, useState } from "react";
import "./wishlist-card.css";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const WishlistCard = ({
  productImg,
  productTitle,
  productPrice,
  id,
  removeFromFavorites,
}) => {
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteFavorite = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/favorites/" + id, {
        method: "DELETE",
      });

      if (res.ok) {
        // Data removed successfully
        setLoading(false);
        removeFromFavorites(id);
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to delete data!!!");
      }
    } catch (error) {
      setError(error.message);
    }

    setFavorite((prev) => !prev);
  };

  const checkFavorite = async (productId) => {
    const res = await fetch("http://localhost:5000/favorites");
    const favorites = await res.json();
    return favorites.find((favorite) => favorite.id === productId);
  };

  useEffect(() => {
    checkFavorite(id).then((favoriteProduct) => {
      if (favoriteProduct) {
        setFavorite(true);
      }
    });
  }, [id]);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="wishlist">
      <Link to={`/products/${id}`} className="wishlist__content">
        <div className="wishlist__image">
          <img src={productImg} />
        </div>
        <div className="wishlist__details">
          <p className="subtitle">{productTitle}</p>
          <span className="price">{productPrice}$</span>
        </div>
      </Link>
      <button className="wishlist__favorite flex">
        {favorite && <AiFillHeart onClick={deleteFavorite} />}
      </button>
    </div>
  );
};

export default WishlistCard;
