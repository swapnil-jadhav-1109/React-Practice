


import React, { useState, useEffect } from 'react';
import ShimerUi from './ShimerUi';
import Slider1Card from './Slider1Card'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RESTAURANT_API } from '../utilities/constants';

const Slide1 = () => {
  const [listofTopRestaurant, setListofTopRestaurant] = useState(null);
  const [slide, setSlide] = useState(0);
  
  const API_URL =RESTAURANT_API;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API_URL);
      const json = await response.json();
      setListofTopRestaurant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);
   };

 const nextSlide = () => {
    if (slide > -((listofTopRestaurant.length - 13))) {
      setSlide(slide - 1);
    }
  };

  const prevSlide = () => {
    if (slide <= 6) {
      setSlide(slide + 1);
    }
  };

  if (listofTopRestaurant == null) {
    return <ShimerUi />;
  }

 
  return (
    <div>
      <div className="restaurant-heading2">
        <p className='heading heading1'>What's on your mind?</p>
      <div className="slider-arrow">
        <p className='arrow' onClick={prevSlide}><IoMdArrowBack /></p>
        <p className='arrow' onClick={nextSlide}><IoMdArrowForward /></p>
      </div>
      </div>
      <div className="slider-content" >
        <div className="dish">
        {listofTopRestaurant.map((restaurant, index) => (
          <div key={index}  style={{ transform: `translateX(${slide * 100}%)`, }}>
           <Slider1Card data={restaurant}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Slide1;
