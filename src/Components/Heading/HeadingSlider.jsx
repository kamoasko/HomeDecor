import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CollectionsCard from "../CollectionsCard";

const HeadingSlider = () => {
  const sliderRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCategoriesData = async () => {
    try {
      const res = await fetch("http://localhost:5000/categories");
      if (res.ok) {
        const colData = await res.json();
        setCategories(() => colData);
      }
    } catch (e) {
      setError(() => e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="beginning__slider">
      <Slider ref={sliderRef} {...settings}>
        {categories.length &&
          categories.map((category) => {
            return (
              <CollectionsCard
                image={category.image}
                title={category.catTitle}
                key={category.id}
              />
            );
          })}
      </Slider>
      <div className="buttons flex">
        <div onClick={handlePrev} className="button flex">
          <FaArrowLeft />
        </div>
        <div onClick={handleNext} className="button flex">
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default HeadingSlider;
