import React from "react";
import AboutUs from "../../Components/AboutUS";
import Discount from "../../Components/Discount";
import MostPopular from "../../Components/MostPopular";
import Products from "../../Components/Products";
import Collections from "../../Components/Collections";
import Contact from "../../Components/Contact";
import Heading from "../../Components/Heading";

const Home = () => {
  return (
    <>
      <Heading />
      <AboutUs />
      <Discount />
      <Products />
      <MostPopular />
      <Collections />
      <Contact />
    </>
  );
};

export default Home;
