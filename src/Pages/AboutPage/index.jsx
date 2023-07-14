import React from "react";
import "./about-page.css";
import AboutUs from "../../Components/AboutUS";
import Breadcrumb from "../../Components/Breadcrumb";

function AboutPage() {
  return (
    <>
      <Breadcrumb />
      <AboutUs />
      <div className="about__info container2 flex">
        <div className="about__info-detail flex">
          <h2>500+</h2>
          <p className="subtitle">PROJECTS</p>
        </div>

        <div className="about__info-detail flex">
          <h2>70+</h2>
          <p className="subtitle">PARTNERS</p>
        </div>

        <div className="about__info-detail flex">
          <h2>30K+</h2>
          <p className="subtitle">FOLLOWERS</p>
        </div>

        <div className="about__info-detail flex">
          <h2>25+</h2>
          <p className="subtitle">YEARS</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
