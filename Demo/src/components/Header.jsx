  import {LOGO_URL} from '../utilities/constants'
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} />

        </div>
    
        <div className="nav-items">
          <ul>
           <a href="" className="nav-links"> <li>Home</li></a>
           <a href="" className="nav-links"> <li>About Us</li></a>
            <a href="" className="nav-links"><li>Contact Us</li></a>
           <a href="" className="nav-links"> <li>Cart</li></a>
          </ul>
        </div>
        <div className="search-container">
          <input type="search" placeholder='search Here' className='searchInput' />
          <button className='searchButton'>Search</button>
        </div>
      </div>
    )
  }
  export default Header;