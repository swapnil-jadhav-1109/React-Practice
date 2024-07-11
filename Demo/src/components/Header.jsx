// import { LOGO_URL } from '../utilities/constants'
import { useState } from 'react';
import { useContext } from 'react';
import resobj from "../utilities/api";
import { SiSwiggy } from "react-icons/si";
import { PiCaretDown } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  // const [Search, setSearch] = useState("");

  const Links = [
    {
      icons: <IoBagOutline  className='logos'/>,
      Name: "Swiggy Corporate"
    },
    {
      icons: < IoSearch className='logos' />,
      Name: "Search"
    },
    {
      icons: < CiDiscount1 className='logos' />,
      Name: "Offers",
      Sup: "New"
    },
    {
      icons: <IoHelpBuoyOutline className='logos' />,
      Name: "Help"
    },
    {
      icons: < MdManageAccounts className='logos'/>,
      Name: "Sign In"
    },
    {
      icons: <FaCartPlus className='logos'/>,
      Name: "Cart"
    },
  ]
console.log(Links);
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" src={LOGO_URL} /> */}
        <SiSwiggy className='logo' />

       <div className='select'> <span className='city'>Other</span> Satara,Maharashtra,India </div>
        <h1 className='caret-logo'><PiCaretDown /></h1>
      </div>

      <div className="nav-items">
        <ul>
       {
         Links.map((link,index)=>{
          return <li key ={index} className="nav-links">
            {link.icons }
            {link.Name}
            <sup>{link.Sup}</sup>
          </li>
         }) 
       }
          {/* <li className="nav-links">Home</li>
           <li className="nav-links">About Us</li>
          <li className="nav-links">Contact Us</li>
           <li className="nav-links">Cart</li> */}
        </ul>
      </div>
      {/* <div className="search-container">
        <input type="search" placeholder='search Here' className='searchInput'
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <hr />
        <button className='btn' onClick={() => {
          console.log(Search);
          const filteredrest = listofRestaurant.filter((res) => {
            res.data.info.name.toLowerCase().includes(Search.toLowerCase());
            setlistofRestaurant(filteredrest);
          })
        }}>Search</button>
      </div> */}

    </div>
  )
}
export default Header;