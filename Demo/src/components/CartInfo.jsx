

import React from 'react';
import { IMG_PATH } from '../utilities/constants';
const CartInfo = ({ items }) => {


    console.log(items);
    return (
        <div className='itemMenu'>
            {items.map((item) => (
                <div key={item.card.info.id} className='items'>
                    <div className='iteminfo'>
                        <p className='Itemlist'>{item.card.info.name}</p>
                        <p className='ItemlistPrice'>₹ {item.card.info.price / 100 || item.card.info.defaultPrice/100}</p>
                        <p className='ItemlistDescription'>{item.card.info.description}</p>
                    </div>
                    <div >
                       <img className='img-itemlist' src={IMG_PATH + item.card.info.imageId}  alt="" />
                           </div>
                </div>

            ))}
        </div>
    );
};

export default CartInfo;

