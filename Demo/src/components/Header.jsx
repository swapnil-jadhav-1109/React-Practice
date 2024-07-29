
import { SiSwiggy } from "react-icons/si";
import { PiCaretDown } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useContext } from "react";
// import UserContext from "../utilities/UserContext";
const Header = () => {

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // const {loggedInUser} = useContext(UserContext);
  // const [Search, setSearch] = useState("");

  // const Links = [
  //   {
  //     icons: <IoBagOutline  className='logos'/>,
  //     Name: "Swiggy Corporate"
  //   },
  //   {
  //     icons: < IoSearch className='logos' />,
  //     Name: "Search"
  //   },
  //   {
  //     icons: < CiDiscount1 className='logos' />,
  //     Name: "Offers",
  //     Sup: "New"
  //   },
  //   {
  //     icons: <IoHelpBuoyOutline className='logos' />,
  //     Name: "Help"
  //   },
  //   {
  //     icons: < MdManageAccounts className='logos'/>,
  //     Name: "Sign In"
  //   },
  //   {
  //     icons: <FaCartPlus className='logos'/>,
  //     Name: "Cart"
  //   },
  // ]
  return (
    <div className="header">
      <div className="logo-container">
        <SiSwiggy className='logo' />

       <div className='select'> <span className='city'>Other</span> Satara,Maharashtra,India </div>
        <h1 className='caret-logo'><PiCaretDown /></h1>
      </div>

      <div className="nav-items">
        <ul className="logos">
       {/* {
         Links.map((link,index)=>{
          return <li key ={index} className="nav-links">
           
           {link.icons }
           {link.Name}
           
            <sup>{link.Sup}</sup>
          </li>
         }) 
       } */}
          <Link to="swiggy-corporate"><li className="nav-links"><IoBagOutline  className='logos'/>Swiggy Corporate </li> </Link>
          <Link to ="Search"> <li className="nav-links"> < IoSearch className='logos' />Search</li></Link>
          <Link to ="Offers"><li className="nav-links">< CiDiscount1 className='logos' />Offers <sup>New</sup> </li></Link>
          <Link to  = "help"><li className="nav-links"><IoHelpBuoyOutline className='logos' />Help </li></Link>
          <Link to = "sign-in"><li className="nav-links">< MdManageAccounts className='logos'/> Sign In </li></Link>
          <Link to = "cart"><li className="nav-links"> <sup>{cartItems.length} </sup><FaCartPlus className='logos'/> Cart </li></Link>
          {/* <Link><li> {loggedInUser} </li></Link> */}
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