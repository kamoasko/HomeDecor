import React, { useEffect, useState } from "react";
import "./products-page.css";
import Breadcrumb from "../../Components/Breadcrumb";
import { FaChevronDown, FaChevronUp, FaSortAmountDown } from "react-icons/fa";
import ProductCard from "../../Components/ProductCard";
import Pagination from "../../Components/Pagination";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState(false);
  const [collection, setCollection] = useState(false);
  const [sort, setSort] = useState(false);
  const [activeCondition, setActiveCondition] = useState("SORT BY");
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [collectionsData, setCollectionsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [isCatAll, setIsCatAll] = useState(true);
  const [isColAll, setIsColAll] = useState(true);

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

  // Fetch collections data
  const getCollectionsData = async () => {
    try {
      const res = await fetch("http://localhost:5000/collections");
      if (res.ok) {
        const data = await res.json();
        setCollectionsData(data);
      } else {
        throw Error("Failed to fetch collections data!");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch categories data
  const getCategoriesData = async () => {
    try {
      const res = await fetch("http://localhost:5000/categories");
      if (res.ok) {
        const data = await res.json();
        setCategoriesData(data);
      } else {
        throw Error("Failed to fetch categories data!");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const filterProducts = (products) => {
    let filteredProducts = [...products];

    if (selectedCategoryId == 0) {
      return filteredProducts;
    } else {
      if (selectedCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoriesId == selectedCategoryId
        );
      }
    }

    if (selectedCollectionId == 0) {
      return filteredProducts;
    } else {
      if (selectedCollectionId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.collectionId == selectedCollectionId
        );
      }
    }

    return filteredProducts;
  };

  const changeSortList = (e) => {
    const getProductsData = async (q) => {
      try {
        const res = await fetch("http://localhost:5000/products?_sort=" + q);
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
    setActiveCondition(e.target.textContent);
    let id = e.target.getAttribute("dataid");
    if (id == 1) {
      getProductsData("views");
    } else if (id == 2) {
      getProductsData("price");
    } else if (id == 3) {
      getProductsData("price&_order=desc");
    } else {
      alert("Invalid Data!!!");
    }
  };

  let filteredProducts = filterProducts(products);

  // Handle checkbox input changes for categories
  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategoryId((prevId) =>
      prevId == categoryId ? null : categoryId
    );
    setIsCatAll(false);
  };

  // Handle checkbox input changes for collections
  const handleCollectionChange = (event) => {
    const collectionId = event.target.value;
    setSelectedCollectionId((prevId) =>
      prevId == collectionId ? null : collectionId
    );
    setIsColAll(false);
  };

  useEffect(() => {
    getCollectionsData();
    getCategoriesData();
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
            <div className="product__sorting-choices">
              <button
                onClick={() => setSort((prev) => !prev)}
                className="sort flex"
              >
                <FaSortAmountDown />
                {activeCondition}
              </button>
              {sort && (
                <ul className="sort__filter">
                  <li dataid={1} onClick={(e) => changeSortList(e)}>
                    POPULAR FIRST
                  </li>
                  <li dataid={2} onClick={(e) => changeSortList(e)}>
                    CHEAPEST FIRST
                  </li>
                  <li dataid={3} onClick={(e) => changeSortList(e)}>
                    EXPENSIVE FIRST
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="product__content">
            <div className="product__content-left">
              <ul className="sortby">
                <li>
                  <div className="sortby__main">
                    <div
                      role="button"
                      onClick={() => setCategory((prev) => !prev)}
                      className="sortby__list flex"
                    >
                      <p>CATEGORIES</p>
                      {category ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {category && (
                      <ul className="sortby__items sbi1">
                        <li className="sortby__items-list">
                          <input
                            type="checkbox"
                            className="categories__inp"
                            checked={isCatAll ? true : false}
                            onChange={() => {
                              setIsCatAll((prev) => !prev);
                              setSelectedCategoryId(0);
                            }}
                          />
                          <label htmlFor="ALL">ALL</label>
                        </li>
                        {categoriesData.map((category) => (
                          <li key={category.id} className="sortby__items-list">
                            <input
                              type="checkbox"
                              name={category.catTitle}
                              value={category.id}
                              className="categories__inp"
                              checked={selectedCategoryId == category.id}
                              onChange={handleCategoryChange}
                            />
                            <label htmlFor={category.id}>
                              {category.catTitle}
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>

                <li>
                  <div className="sortby__main sbm1">
                    <div
                      role="button"
                      onClick={() => setCollection((prev) => !prev)}
                      className="sortby__list flex"
                    >
                      <p>COLLECTIONS</p>
                      {collection ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {collection && (
                      <ul className="sortby__items">
                        <li className="sortby__items-list">
                          <input
                            type="checkbox"
                            className="categories__inp"
                            checked={isColAll ? true : false}
                            onChange={() => {
                              setIsColAll((prev) => !prev);
                              setSelectedCollectionId(0);
                            }}
                          />
                          <label htmlFor="ALL">ALL</label>
                        </li>
                        {collectionsData.map((collection) => (
                          <li
                            key={collection.id}
                            className="sortby__items-list"
                          >
                            <input
                              type="checkbox"
                              name={collection.colTitle}
                              value={collection.id}
                              className="categories__inp"
                              checked={selectedCollectionId == collection.id}
                              onChange={handleCollectionChange}
                            />
                            <label htmlFor={collection.id}>
                              {collection.colTitle.toUpperCase()}
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <div className="product__content-right">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    productImg={product.image}
                    productTitle={product.title}
                    price={product.price}
                    key={product.id}
                    id={product.id}
                  />
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
