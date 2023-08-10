import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

const MostPopularSlider = () => {
  const sliderRef = useRef(null);

  const [populars, setPopulars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPopulars = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      if (res.ok) {
        const data = await res.json();
        setPopulars(() => data.slice(4, 12));
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
    getPopulars();
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
