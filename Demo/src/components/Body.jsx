

import Card from "./Card";
import { useState, useEffect } from "react";
import ShimerUi from "./ShimerUi.jsx";
import { RESTAURANT_API } from "../utilities/constants.jsx";
import Slide1 from "./Slide1.jsx";
// import axios from 'axios'
import Toprestaurant from "./Toprestaurant.jsx";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utilities/useOnlineStatus.jsx";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      const json = await response.json();
      // console.log(json);
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return (
   <h1>Looks like you're offline!! Please check your internet connection </h1>
    )
    
  if (loading) {
    return <ShimerUi />;
  }

  return (
    <div className="body">
       <Slide1 /> 
      <Toprestaurant />
      <div className="restaurant-heading">
        <h2 className='heading'>Restaurants with online food delivery in Pune</h2>
      </div>
      <div className="cards">
        {listofRestaurant.map((restaurant, index) => (
          <Link key={index} to={`/restaurant/${restaurant.info.id}`}>
            <Card data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

