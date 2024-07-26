import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import ItemList from './ItemList';

const ResCategory = ({ data }) => {
  return (
    <div>
      <div className='Categories' >
        <div className='category'>
          <span className='title'>{data.title} ({data.itemCards.length})</span>
          <span className='title title-arrow'>< IoIosArrowDown /></span>
        </div>
       <ItemList items={data.itemCards}/>
      </div>
    </div>
  )
}

export default ResCategory;
