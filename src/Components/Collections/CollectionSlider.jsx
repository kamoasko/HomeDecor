import React, { useRef } from "react";
import Slider from "react-slick";
import CollectionsCard from "../CollectionsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CollectionSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
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
    <div className="collections__content">
      <Slider ref={sliderRef} {...settings}>
        <CollectionsCard />
        <CollectionsCard />
        <CollectionsCard />
        <CollectionsCard />
        <CollectionsCard />
        <CollectionsCard />
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

export default CollectionSlider;
