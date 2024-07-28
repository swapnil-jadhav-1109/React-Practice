

import React from 'react';
import { IMG_PATH } from '../utilities/constants';
import { useDispatch } from 'react-redux';
import { addItems } from '../utilities/cartSlice';

const ItemList = ({ items }) => {

    const Dispatch = useDispatch();

    const HandleAddItems = ()=>{
        Dispatch(addItems("Pizza"))
    }
    // console.log(items);
    return (
        <div className='itemMenu'>
            {items.map((item) => (
                <div key={item.card.info.id} className='items'>
                    <div className='iteminfo'>
                        <p className='Itemlist'>{item.card.info.name}</p>
                        <p className='ItemlistPrice'>₹ {item.card.info.price / 100}</p>
                        <p className='ItemlistDescription'>{item.card.info.description}</p>
                    </div>
                    <div >
                       <img className='img-itemlist' src={IMG_PATH + item.card.info.imageId}  alt="" />
                       <button className='img-btn' onClick={HandleAddItems}><h2>ADD</h2></button>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ItemList;
