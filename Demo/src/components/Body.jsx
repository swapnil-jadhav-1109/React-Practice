import Card from "./Card";
import resobj from "../utilities/api";
import { useState , useEffect } from "react";
const Body = () => {
  const [listofReastaurant, setlistofRestaurant] = useState(resobj);
//  useEffect(()=>{
//   fetchData();
//  },[]);
//  const fetchData = async ()=>{
//   const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559");

//   const json = await data.json();
//   console.log(json);
//  }
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div className="filteredList">
        <button onClick={() => {
          const filtered = listofReastaurant.filter((res) => res.resobj.Ratings === "4.1");
          setlistofRestaurant(filtered);
        }}>
          Top Rated Restaurants
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