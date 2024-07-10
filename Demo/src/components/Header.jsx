import { LOGO_URL } from '../utilities/constants'
import { useState } from 'react';
import { useContext } from 'react';
import resobj from "../utilities/api";
const Header = () => {
  const [Search, setSearch] = useState("");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />

      </div>

      <div className="nav-items">
        <ul>
           <li className="nav-links">Home</li>
           <li className="nav-links">About Us</li>
          <li className="nav-links">Contact Us</li>
           <li className="nav-links">Cart</li>
        </ul>
      </div>
      <div className="search-container">
        <input type="search" placeholder='search Here' className='searchInput'
         value={Search} 
         onChange={(e)=>{
           setSearch(e.target.value);
         }}
         />
        <hr />
        <button className='btn' onClick={() => {
       console.log(Search);
       const filteredrest = listofRestaurant.filter((res)=>{
     res.data.info.name.toLowerCase().includes(Search.toLowerCase());
     setlistofRestaurant(filteredrest);
       })
        }}>Search</button>
      </div>
    </div>
  )
}
export default Header;