import React, { useEffect, useState } from "react";
import WishlistCard from "../WishlistCard";

const Wishlist = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getFavorites = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/favorites");

      if (res.ok) {
        // Data fetched successfully
        const data = await res.json();
        setFavorites(() => data);
        setLoading(false);
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to fetch data!!!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <WishlistCard
            productImg={favorite.image}
            productTitle={favorite.title}
            productPrice={favorite.price}
            id={favorite.id}
            key={favorite.id}
            removeFromFavorites={removeFromFavorites}
          />
        ))
      ) : (
        <p>There is no products in the wishlist</p>
      )}
    </>
  );
};

export default Wishlist;
