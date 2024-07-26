import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemList from './ItemList';

const ResCategory = ({ data }) => {
  const [show , setShow] = useState(false);

  const handleClick = ()=>{
    setShow(!show);

  }

  return (
    <div>
      <div className='Categories' >
        <div className='category' onClick={handleClick}>
          <span className='title'>{data.title} ({data.itemCards.length})</span>
          <span className='title title-arrow'>
         {show ?< IoIosArrowUp />:< IoIosArrowDown />} 
        </span>
        </div>
      { show && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  )
}

export default ResCategory;
