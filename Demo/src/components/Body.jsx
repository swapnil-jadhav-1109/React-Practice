import Card from "./Card";
import resobj from "../utilities/api";
import { useState, useEffect } from "react";
import Header from "./Header";
const Body = () => {
  const [listofReastaurant, setlistofRestaurant] = useState(resobj);
  
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div className="cards">
        {
          listofReastaurant.map((restaurant, index) => <Card key={index} data={restaurant} />)
        }

      </div>
    </div>
  )
}
export default Body;