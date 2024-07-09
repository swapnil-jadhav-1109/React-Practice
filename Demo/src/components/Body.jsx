// import Card from "./Card";
// import resobj from "../utilities/api";
// import { useState, useEffect } from "react";
// import Header from "./Header";
// import ShimerUi from "./ShimerUi.jsx"
// const Body = () => {
//   const [listofReastaurant, setlistofRestaurant] = useState([]);
  
//   useEffect(()=>{
//    fetchData();
//   },[])

//   const fetchData = async ()=>{
//     const data = fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532")
  
// const json = (await  data).json();
// console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
// setlistofRestaurant();
  
// if(listofReastaurant.length > 0){
//   return <ShimerUi />
// } 
//   }

//   return (
//     <div className="body">
//       <div className="restaurant-heading">
//         <h1>Restaurants with online food delivery in Mumbai</h1>
//       </div>
//       <div>
//         <button className="btn" onClick={()=>{
//           const filtered = listofReastaurant.filter((res)=>res.Address === "Chembur");
//           setlistofRestaurant(filtered);
//         }}>
//           top rated restaurants
//           </button>
//       </div>
//       <div className="cards">
//         {listofReastaurant.map((restaurant, index) => (<Card key={index} data={restaurant} />
//       ))
//         }

//       </div>
//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import Card from "./Card";
import resobj from "../utilities/api";
import Header from "./Header";
import ShimerUi from "./ShimerUi.jsx";

const Body = () => {
  const [listofReastaurant, setlistofRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532");
      const json = await response.json();
      const restaurants = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      setlistofRestaurant(restaurants);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ShimerUi />;
  }

  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div>
        <button
          className="btn"
          // onClick={() => {
          //   const filtered = listofReastaurant.filter((res) => res.Address === "Chembur");
          //   setlistofRestaurant(filtered);
          // }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="cards">
        {listofReastaurant.map((restaurant, index) => (
          <Card key={index} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;