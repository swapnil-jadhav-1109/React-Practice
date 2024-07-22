

// import Card from "./Card";
// import { useState, useEffect } from "react";
// import ShimerUi from "./ShimerUi.jsx";
// // import axios from 'axios'
// import Toprestaurant from "./Toprestaurant.jsx";
// import {Link} from 'react-router-dom';


// const Body = () => {
//   const [listofRestaurant, setlistofRestaurant] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   // const fetchData = ()=>{
//   //  axios.get("https://www.swiggy.com/mapi/homepage/getCards?lat=17.6804639&lng=74.018261")
  
//   //  .then((res)=>{
//   //   console.log(res);
//   //   setlistofRestaurant(res?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []);
//   //  })
   
//   // }

//   const fetchData = async () => {
//     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await response.json();
//     console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setlistofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setLoading(false);
//   };

//   if (loading) {
//     return <ShimerUi />;
//   }

//   return (
//     <div className="body">
//       <Toprestaurant />
//       <div className="restaurant-heading">
//         <h2 className='heading'>Restaurants with online food delivery in Satara</h2>
//       </div>
//       {/* <div>
//         <button className="btn" onClick={() => {
//           const filtered = listofRestaurant.filter((res) => res.info.avgRating > 4);
//           setlistofRestaurant(filtered);
//         }}>
//           Top rated restaurants
//         </button>
//       </div> */}
//       <div className="cards">
//        {listofRestaurant.map((restaurant, index) => (
//           <Card key={index} data={restaurant} />
//         ))}
        
//       </div>
//     </div>
//   );
// };

// export default Body;

import Card from "./Card";
import { useState, useEffect } from "react";
import ShimerUi from "./ShimerUi.jsx";
// import Slide1 from "./Slide1.jsx";
// import axios from 'axios'
import Toprestaurant from "./Toprestaurant.jsx";
import { Link } from 'react-router-dom';

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ShimerUi />;
  }

  return (
    <div className="body">
      {/* <Slide1 /> */}
      <Toprestaurant />
      <div className="restaurant-heading">
        <h2 className='heading'>Restaurants with online food delivery in Satara</h2>
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
