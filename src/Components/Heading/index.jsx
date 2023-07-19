import React, { useEffect, useState } from "react";
import "./heading.css";
import HeadingSlider from "./HeadingSlider";
import Buttons from "../Buttons";

function Heading() {
  const [heading, setHeading] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getHeading = async () => {
    try {
      const res = await fetch("http://localhost:5000/heading");
      if (res.ok) {
        const headingImage = await res.json();
        setHeading(() => headingImage);
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
    getHeading();
  }, []);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section className="beginning container">
      <div className="heading flex ">
        <div className="heading__title">
          <h1>{heading.title}</h1>
          <p>{heading.desc}</p>
          <div className="shop">
            <Buttons text="SHOP NOW" icon={true} link="/products" />
          </div>
        </div>
        <div className="heading__right">
          <div className="heading__image">
            <img src={heading && heading.image} />
          </div>
          <div className="blur"></div>
        </div>
      </div>
      <HeadingSlider />
    </section>
  );
}

export default Heading;
