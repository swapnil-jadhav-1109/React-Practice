


import React, { useState, useEffect } from 'react';
import ShimerUi from './ShimerUi';
import Slider1Card from './Slider1Card'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RESTAURANT_API } from '../utilities/constants';

const Slide1 = () => {
  const [listofTopRestaurant, setListofTopRestaurant] = useState([]);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL =RESTAURANT_API;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setListofTopRestaurant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);
    } catch (error) {
      setError("Failed to fetch top restaurants");
    } finally {
      setLoading(false);
    }
  };

  // const nextSlide = () => {
  //  setSlide(slide + 1)
  // };

  // const prevSlide = () => {
  //   setSlide(slide - 1)
  // };
  const nextSlide = () => {
    if (slide > -((listofTopRestaurant.length - 14))) {
      setSlide(slide - 2);
    }
  };

  const prevSlide = () => {
    if (slide <= 0) {
      setSlide(slide + 2);
    }
  };

  if (loading) {
    return <ShimerUi />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="restaurant-heading">
        <p className='heading'>What's on your mind?</p>
      </div>
      <div className="slider1">
        <p className='arrow' onClick={prevSlide}><IoMdArrowBack /></p>
        <p className='arrow' onClick={nextSlide}><IoMdArrowForward /></p>
      </div>
      <div className="slider-content" >
        <div className="dish">
        {listofTopRestaurant.map((restaurant, index) => (
          <div key={index}  style={{ transform: `translateX(${slide * 100}%)`, transition: 'transform 0.5s ease' }}>
           <Slider1Card data={restaurant}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Slide1;
