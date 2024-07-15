

import Card from "./Card";
import { useState, useEffect } from "react";
import Header from "./Header";
import ShimerUi from "./ShimerUi.jsx";
import Toprestaurant from "./Toprestaurant.jsx";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.6804639&lng=74.018261");
    const json = await response.json();
    console.log(json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setlistofRestaurant(json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []);
    setLoading(false);
  };

  if (loading) {
    return <ShimerUi />;
  }

  return (
    <div className="body">
      <Toprestaurant />
      <div className="restaurant-heading">
        <h2 className='heading'>Restaurants with online food delivery in Satara</h2>
      </div>
      {/* <div>
        <button className="btn" onClick={() => {
          const filtered = listofRestaurant.filter((res) => res.info.avgRating > 4);
          setlistofRestaurant(filtered);
        }}>
          Top rated restaurants
        </button>
      </div> */}
      <div className="cards">
        {listofRestaurant.map((restaurant, index) => (
          <Card key={index} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
