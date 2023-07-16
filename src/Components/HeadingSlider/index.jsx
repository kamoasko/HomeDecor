import React, { useRef } from "react";
import Slider from "react-slick";
import "./heading-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CollectionsCard from "../CollectionsCard";

const HeadingSlider = () => {
  // const sliderRef = useRef(null);
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };
  // const handlePrev = () => {
  //   sliderRef.current.slickPrev();
  // };
  // const handleNext = () => {
  //   sliderRef.current.slickNext();
  // };
  // return (
  //   <>
  //     <div className="beginning__slider">
  //       <Slider ref={sliderRef} {...settings}>
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //         <CollectionsCard />
  //       </Slider>
  //     </div>
  //     <div className="buttons flex">
  //       <button onClick={handlePrev} className="prev button flex">
  //         <FaArrowLeft />
  //       </button>
  //       <button onClick={handleNext} className="next button flex">
  //         <FaArrowRight />
  //       </button>
  //     </div>
  //   </>
  // );

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    </section>
  );
};

export default HeadingSlider;
