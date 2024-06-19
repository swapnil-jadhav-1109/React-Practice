import Card from "./Card"; 
import resobj from "../utilities/api";
const Body = () => {
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div className="cards">
     {
      resobj.map((restaurant)=> <Card  key = {resobj.id} data = {restaurant}/>)
     }

  </div>
    </div>
  )
}
export default Body;