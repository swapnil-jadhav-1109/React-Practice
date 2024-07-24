


import React, { useState, useEffect } from 'react';
import ShimerUi from './ShimerUi';
import Card from './Card';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RESTAURANT_API } from '../utilities/constants';

const Toprestaurant = () => {
  const [listofTopRestaurant, setlistofTopRestaurant] = useState(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   
      const response = await fetch(RESTAURANT_API);
      const json = await response.json();
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistofTopRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  };

  if (listofTopRestaurant == null) {
    return <ShimerUi />;
  }

  const nextSlide = () => {
    if (slide > -((listofTopRestaurant.length - 4))) {
      setSlide(slide - 1);
    }
  };

  const prevSlide = () => {
    if (slide < 0) {
      setSlide(slide + 1);
    }
  };

  return (
    <div className="body">
      <div className="restaurant-heading2">
        <p className='heading heading1'>Top Restaurant Chains in Pune</p>
        <div className="slider-arrow">
          <p className='arrow' onClick={prevSlide}><IoMdArrowBack /></p>
          <p className='arrow' onClick={nextSlide}><IoMdArrowForward /></p>
        </div>
      </div>
      <div className="Top-Restaurants">
        <div className="Top-Restaurants-cards">
          {listofTopRestaurant.map((restaurant, index) => (
            <div 
              key={index} 
              className='top-cards shrink-0 duration-500' 
              style={{ transform: `translateX(${slide * 100}%)` }}
            >
              <Card data={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toprestaurant;
