import React from "react";
import "./heading.css";
import heading from "../../assets/images/Header/Heading.png";
import HeadingSlider from "../HeadingSlider";
import Buttons from "../Buttons";

function Heading() {
  return (
    <section className="beginning container">
      <div className="heading flex ">
        <div className="heading__title">
          <h1>
            THE FURNITURE <br /> THAT DEFINES YOU
          </h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
          <div className="shop">
            <Buttons text="SHOP NOW" icon={true} link="/products" />
          </div>
        </div>
        <div className="heading__right">
          <div className="heading__image">
            <img src={heading} />
          </div>
          <div className="blur"></div>
        </div>
      </div>
      <HeadingSlider />
    </section>
  );
}

export default Heading;
