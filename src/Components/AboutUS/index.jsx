import React, { useEffect, useState } from "react";
import "./about.css";
import { useLocation } from "react-router-dom";
import SecondaryButtons from "../SecondaryButtons";

function AboutUs() {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const getAbout = async () => {
    try {
      const res = await fetch("http://localhost:5000/about");
      if (res.ok) {
        const aboutData = await res.json();
        setAbout(() => aboutData);
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
    getAbout().then();
  }, []);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section className="about">
      <div className="container">
        <h2>ABOUT US</h2>
        <div className="about__desc flex">
          <div className="about__desc-image">
            {about && <img src={about.image} />}
          </div>
          <div className="about__desc-content">
            {location.pathname == "/about" ? (
              <p>{about.desc}</p>
            ) : (
              <>
                <p>{about.desc}</p>
                <div className="about__desc-btn">
                  <SecondaryButtons
                    text="LEARN MORE"
                    icon={false}
                    link="/about"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
