import React, { useEffect, useState } from "react";
import "./products-page.css";
import Breadcrumb from "../../Components/Breadcrumb";
import { FaChevronDown, FaSortAmountDown } from "react-icons/fa";
import ProductCard from "../../Components/ProductCard";
import Pagination from "../../Components/Pagination";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(() => data);
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
    <>
      <Breadcrumb />
      <section className="product ">
        <div className="container">
          <div className="product__title flex">
            <h2>PRODUCTS</h2>
          </div>
          <div className="product__sorting">
            <p className="product__sorting-info">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime.
            </p>
            <button className="sort flex">
              <FaSortAmountDown />
              SORT BY
            </button>
          </div>
          <div className="product__content">
            <div className="product__content-left">
              <ul className="sortby">
                <li>
                  {" "}
                  <div className="sortby__list flex">
                    <p>CATEGORIES</p>
                    <FaChevronDown />
                  </div>
                  <ul className="sortby__items">
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name=""
                        className="categories__inp"
                      />
                      <label htmlFor="">ALL</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="SOFAS"
                        className="categories__inp"
                      />
                      <label htmlFor="SOFAS">SOFAS</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="BEDS AND HEADBOARDS"
                        className="categories__inp"
                      />
                      <label htmlFor="BEDS AND HEADBOARDS">
                        BEDS AND HEADBOARDS
                      </label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="RUGS"
                        className="categories__inp"
                      />
                      <label htmlFor="RUGS">RUGS</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="CUSHIONS"
                        className="categories__inp"
                      />
                      <label htmlFor="CUSHIONS">CUSHIONS</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="SOFAS"
                        className="categories__inp"
                      />
                      <label htmlFor="SOFAS">SOFAS</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="HEADBOARDS"
                        className="categories__inp"
                      />
                      <label htmlFor="HEADBOARDS">HEADBOARDS</label>
                    </li>
                  </ul>
                </li>

                <li>
                  {" "}
                  <div className="sortby__list flex">
                    <p>COLLECTIONS</p>
                    <FaChevronDown />
                  </div>
                  <ul className="sortby__items">
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="ALL"
                        className="categories__inp"
                      />
                      <label htmlFor="ALL">ALL</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="BEDROOM"
                        className="categories__inp"
                      />
                      <label htmlFor="BEDROOM">BEDROOM</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="LIVING ROOM"
                        className="categories__inp"
                      />
                      <label htmlFor="LIVING ROOM">LIVING ROOM</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="KITCHEN"
                        className="categories__inp"
                      />
                      <label htmlFor="KITCHEN">KITCHEN</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="LIBRARY"
                        className="categories__inp"
                      />
                      <label htmlFor="LIBRARY">LIBRARY</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="OFFICE"
                        className="categories__inp"
                      />
                      <label htmlFor="OFFICE">OFFICE</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="LAUNDRY ROOM"
                        className="categories__inp"
                      />
                      <label htmlFor="LAUNDRY ROOM">LAUNDRY ROOM</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="GUEST ROOM"
                        className="categories__inp"
                      />
                      <label htmlFor="GUEST ROOM">GUEST ROOM</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="FAMILY ROOM"
                        className="categories__inp"
                      />
                      <label htmlFor="FAMILY ROOM">FAMILY ROOM</label>
                    </li>
                    <li className="sortby__items-list">
                      <input
                        type="checkbox"
                        name="BATHROOM"
                        className="categories__inp"
                      />
                      <label htmlFor="BATHROOM">BATHROOM</label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="product__content-right">
              {products.length &&
                products.map((product) => {
                  return (
                    <ProductCard
                      productImg={product.image}
                      productTitle={product.title}
                      price={product.price}
                      key={product.id}
                      id={product.id}
                    />
                  );
                })}
            </div>
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
