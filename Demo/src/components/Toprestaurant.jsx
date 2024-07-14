import React from 'react'
import { useState,useEffect } from 'react';
import ShimerUi from './ShimerUi';
import Card from './Card';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


const Toprestaurant = () => {
    const [listofTopRestaurant, setlistofTopRestaurant] = useState([]);
    const [slide,setslide] = useState(0);
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.6804639&lng=74.018261");
      const json = await response.json();
      console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setlistofTopRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []);
      setLoading(false);
    };
  
    if (loading) {
      return <ShimerUi />;
    }
    const nextslide = ()=>{
      console.log(listofTopRestaurant.length);
      console.log(slide - 2);
      if(slide == 0) return false;
      setslide(slide + 1)
    }
    const prevslide = ()=>{
      console.log(listofTopRestaurant.length);
      console.log(slide + 2);
      if(slide == -10) return false;
      setslide(slide - 1)
    }
  
    return (
      <div className="body">
        <div className="restaurant-heading">
        <h1>Top Restaurant Chains in Satara</h1>
        </div>
        {/* <div>
          <button className="btn" onClick={() => {
            const filtered = listofTopRestaurant.filter((res) => res.info.avgRating > 4);
            setlistofTopRestaurant(filtered);
          }}>
            Top rated restaurants
          </button>
        </div> */}
        <div className="Top-Restaurants">
        <div className=" slider-arrow">
        <p className='arrow' onClick={nextslide}>< FaArrowLeft/></p>
        <p className='arrow'  onClick={prevslide}><FaArrowRight /></p>
        </div>
         <div  className="Top-Restaurants-cards">
          {listofTopRestaurant.map((restaurant, index) => (
           <div key={index} className='top-cards shrink-0 duration-500' style ={{transform: `translateX(${slide}00%)` }}> <Card  data={restaurant} /></div>
          ))}
          </div>
        </div>
      </div>
    );
  };
export default Toprestaurant;