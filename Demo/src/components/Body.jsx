import Card from "./Card";
import resobj from "../utilities/api";
import { useState, useEffect } from "react";
import Header from "./Header";
const Body = () => {
  const [listofReastaurant, setlistofRestaurant] = useState(resobj);
  
  useEffect(()=>{
   fetchData();
  },[])

  const fetchData = async ()=>{
    const dat = fetch("https:/www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
  
const json = (await dat).json();
console.log(json);
setlistofRestaurant(json.object?.data?.cards);
  
}; 
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div>
        <button className="btn" onClick={()=>{
          const filtered = listofReastaurant.filter((res)=>res?.data?.Address == "Chembur")
          setlistofRestaurant(filtered);
        }}>
          top rated restaurants
          </button>
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