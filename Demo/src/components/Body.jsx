import Card from "./Card";
import resobj from "../utilities/api";
import { useState, useEffect } from "react";
import Header from "./Header";
const Body = () => {
  const [listofReastaurant, setlistofRestaurant] = useState(resobj);
  
//   useEffect(()=>{
//    fetchData();
//   },[])

//   const fetchData = async ()=>{
//     const data = fetch("https://www.google-analytics.com/g/collect?v=2&tid=G-X3K3CELKLV&gtm=45je4730v899482468z877032815za200zb77032815&_p=1720195270818&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=947732492.1717431211&ul=en-us&sr=527x608&lps=1&uaa=&uab=64&uafvl=Not%252FA)Brand%3B8.0.0.0%7CChromium%3B126.0.6478.127%7CGoogle%2520Chrome%3B126.0.6478.127&uamb=1&uam=Nexus%205&uap=Android&uapv=6.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1720192790&sct=7&seg=1&dl=https%3A%2F%2Fwww.swiggy.com%2F&dr=https%3A%2F%2Fwww.google.com%2F&dt=Order%20Food%20Online%20from%20India%27s%20Best%20Food%20Delivery%20Service%20%7C%20Swiggy&en=page_view&tfd=8273&_z=fetch")
  
// const json = await data.json();
// console.log(json);
// setlistofRestaurant(json.object.cards);
  
// }; 
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div>
        <button className="btn" onClick={()=>{
          const filtered = listofReastaurant.filter((res)=>res.Address == "Chembur")
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