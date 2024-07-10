// import Card from "./Card";
// import { useState, useEffect } from "react";
// import Header from "./Header";
// import ShimerUi from "./ShimerUi.jsx";

// const Body = () => {
//   const [listOfRestaurant, setListOfRestaurant] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532");
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const json = await response.json();
//       setListOfRestaurant(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || []);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <ShimerUi />;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="body">
//       <div className="restaurant-heading">
//         <h1>Restaurants with online food delivery in Mumbai</h1>
//       </div>
//       <div>
//         <button className="btn" onClick={() => {
//           const filtered = listOfRestaurant.filter((res) => res.info.locality === "Koramangla");
//           setListOfRestaurant(filtered);
//         }}>
//           Top rated restaurants
//         </button>
//       </div>
//       <div className="cards">
//         {listOfRestaurant.map((restaurant, index) => (
//           <Card key={index} data={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import Card from "./Card";
import { useState, useEffect } from "react";
import Header from "./Header";
import ShimerUi from "./ShimerUi.jsx";

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
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div>
        <button className="btn" onClick={() => {
          const filtered = listofRestaurant.filter((res) => res.info.avgRating > 4);
          setlistofRestaurant(filtered);
        }}>
          Top rated restaurants
        </button>
      </div>
      <div className="cards">
        {listofRestaurant.map((restaurant, index) => (
          <Card key={index} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
