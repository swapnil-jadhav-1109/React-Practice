import Card from "./Card";
import resobj from "../utilities/api";
import { useState } from "react";
const Body = () => {
  const [listofReastaurant, setlistofRestaurant] = useState(resobj);
//  useEffect(()=>{
//   console.log("upload successfully")
//  },[]);
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div className="filteredList">
        <button onClick={() => {
          const filtered = listofReastaurant.filter((res) => res.resobj.Food = "North Indian" );
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