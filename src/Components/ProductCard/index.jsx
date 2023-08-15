import React, { useEffect, useState } from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function ProductCard({ productImg, productTitle, productPrice, id }) {
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addFavorite = async () => {
    let newData = {
      id: id,
      image: productImg,
      title: productTitle,
      price: productPrice,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (res.ok) {
        // Data added successfully
        setLoading(false);
        console.log("Data added successfully!");
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to add data!!!");
      }
    } catch (error) {
      setError(error.message);
    }

    setFavorite((prev) => !prev);
  };

  const deleteFavorite = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/favorites/" + id, {
        method: "DELETE",
      });

      if (res.ok) {
        // Data removed successfully
        setLoading(false);
        console.log("Data removed successfully!");
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
    <div className="product__main">
      <button
        onClick={favorite ? deleteFavorite : addFavorite}
        className="favorite flex"
      >
        {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <Link className="products__card" to={`/products/${id}`}>
        <div className="products__card-image">
          <img src={productImg} />
        </div>
        <p className="subtitle">{productTitle}</p>
        <span className="price">{productPrice}$</span>
      </Link>
    </div>
  );
}

export default ProductCard;
