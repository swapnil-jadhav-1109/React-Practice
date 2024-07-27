
import Card from "./Card";
import { useState, useEffect, useContext } from "react";
import ShimerUi from "./ShimerUi.jsx";
import { RESTAURANT_API } from "../utilities/constants.jsx";
import Slide1 from "./Slide1.jsx";
// import axios from 'axios'
import Toprestaurant from "./Toprestaurant.jsx";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utilities/useOnlineStatus.jsx";
import UserContext from "../utilities/UserContext.jsx";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState(null);
  
  const {loggedInUser , setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
      const response = await fetch(RESTAURANT_API);
      const json = await response.json();
      console.log(json);
       setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return (
   <h1>Looks like you're offline!! Please check your internet connection </h1>
    )
    
  if (listofRestaurant == null) {
    return <ShimerUi />;
  }


  return (
    <div className="body">
      <label htmlFor="UserName">UserName : </label>
      <input type="text" id="UserName" 
      value={loggedInUser}
      onChange={(e)=>{
        setUserName(e.target.value);
      }}
      
      />
       <Slide1 /> 
      <Toprestaurant />
      <div className="restaurant-heading">
        <h2 className='heading'>Restaurants with online food delivery in Pune</h2>
      </div>
      <div className="cards">
        {listofRestaurant.map((restaurant, index) => (
          <Link key={index} to={`/restaurant/${restaurant.info.id}`}>
            <Card data={restaurant}  />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

