// import React from 'react'
// import { useState,useEffect } from 'react';
// import ShimerUi from './ShimerUi';
// import Card from './Card';
// import { IoMdArrowBack } from "react-icons/io";
// import {  IoMdArrowForward } from "react-icons/io";


// const Toprestaurant = () => {
//     const [listofTopRestaurant, setlistofTopRestaurant] = useState([]);
//     const [slide,setslide] = useState(0);
//     const [loading, setLoading] = useState(true);

  
//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     const fetchData = async () => {
//       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//       const json = await response.json();
//       console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       setlistofTopRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       setLoading(false);
//     };

//     if (loading) {
//       return <ShimerUi />;
//     }
//     const nextslide = ()=>{
//       console.log(listofTopRestaurant.length);
//       console.log(slide - 2);
//       if(slide == 0) return false;
//       setslide(slide + 1)
//     }
//     const prevslide = ()=>{
//       console.log(listofTopRestaurant.length);
//       console.log(slide + 2);
//       if(slide == -16) return false;
//       setslide(slide - 1)
//     }
  
//     return (
//       <div className="body">
//         <div className="restaurant-heading2">
//         <h2 className='heading heading1'>Top Restaurant Chains in Satara</h2>
//         <div className=" slider-arrow">
//         <p className='arrow' onClick={nextslide}><IoMdArrowBack/></p>
//         <p className='arrow'  onClick={prevslide}><IoMdArrowForward /></p>
//         </div>
//         </div>
//         {/* <div>
//           <button className="btn" onClick={() => {
//             const filtered = listofTopRestaurant.filter((res) => res.info.avgRating > 4);
//             setlistofTopRestaurant(filtered);
//           }}>
//             Top rated restaurants
//           </button>
//         </div> */}
    
//         <div className="Top-Restaurants">
//          <div  className="Top-Restaurants-cards">
//           {listofTopRestaurant.map((restaurant, index) => (
//            <div key={index} className='top-cards shrink-0 duration-500' style ={{transform: `translateX(${slide}00%)` }}> <Card  data={restaurant} /></div>
//           ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
// export default Toprestaurant;


import React, { useState, useEffect } from 'react';
import ShimerUi from './ShimerUi';
import Card from './Card';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RESTAURANT_API } from '../utilities/constants';

const Toprestaurant = () => {
  const [listofTopRestaurant, setlistofTopRestaurant] = useState([]);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      const json = await response.json();
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistofTopRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch top restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
        <h2 className='heading heading1'>Top Restaurant Chains in Pune</h2>
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
