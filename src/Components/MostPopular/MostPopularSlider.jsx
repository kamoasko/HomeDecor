import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import ProductCard from "../ProductCard";
import useFetchData from "../UseFetchData/useFetchData";

const MostPopularSlider = () => {
  const sliderRef = useRef(null);
  const {
    data: populars,
    loading,
    error,
  } = useFetchData("/products?views_gte=35");

  if (loading) {
    return <h3>LOADING......</h3>;
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
    <div className="popular__content">
      <Slider ref={sliderRef} {...settings}>
        {populars.length &&
          populars.map((popular) => {
            return (
              <ProductCard
                productImg={popular.image}
                productTitle={popular.title}
                productPrice={popular.price}
                id={popular.id}
                key={popular.id}
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
    </div>
  );
};

export default MostPopularSlider;
