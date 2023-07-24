import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CollectionsCard from "../CollectionsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CollectionSlider = () => {
  const sliderRef = useRef(null);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getColData = async () => {
    try {
      const res = await fetch("http://localhost:5000/collections");
      if (res.ok) {
        const colData = await res.json();
        setCollections(() => colData);
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
    getColData();
  }, []);

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
        {collections.length &&
          collections.map((collection) => {
            return (
              <CollectionsCard
                image={collection.image}
                title={collection.colTitle}
                link={`collections/${collection.id}`}
                key={collection.id}
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

export default CollectionSlider;
