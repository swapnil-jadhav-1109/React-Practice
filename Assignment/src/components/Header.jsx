import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-800 text-white'>
      <div>
        <h1 className='text-[35px] text-center mb-8 font-semibold'>Component Life Cycle</h1>
        </div>
        <div>
            <ul className='flex justify-around font-semibold text-[20] pb-5 cursor-pointer'>
               <Link to = "mounting"> <li>Mounting</li></Link>
               <Link to = "updating"><li>Updating</li></Link> 
               <Link to = "unmounting"> <li>Unmounting</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header
