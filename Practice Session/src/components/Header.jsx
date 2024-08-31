import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className='flex justify-center  bg-slate-500 font-semibold text-white'>
       <Link to="home" className='m-4'> <li>Home</li></Link>
       <Link to="menu"  className='m-4'><li>menu</li></Link> 
       <Link to="cart"  className='m-4'> <li>cart</li></Link> 
       <Link to="about us"  className='m-4'> <li>About Us</li></Link> 
      </ul>
    </div>
  )
}

export default Header
