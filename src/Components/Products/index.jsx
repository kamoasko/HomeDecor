import React, { useEffect, useState } from "react";
import "./products.css";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(() => data.slice(0, 8));
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
    getProducts();
  }, []);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <section className="products ">
      <div className="container">
        <SectionTitle text="PRODUCTS" isLink={true} />
        <div className="products__content">
          {products.length &&
            products.map((product) => {
              return (
                <ProductCard
                  productImg={product.image}
                  productTitle={product.title}
                  productPrice={product.price}
                  id={product.id}
                  key={product.id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Products;
