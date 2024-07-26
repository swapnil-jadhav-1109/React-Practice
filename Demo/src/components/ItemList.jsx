// import React from 'react'

// const ItemList = (items) => {
//     console.log(items);
//     return (
//         <div>
//             {items.map((item) => (
//                 < div key = {item.card.info.id} >
//                     <p className='Itemlist'>{item.card.info.name}</p>
//                     <p className='Itemlist'>₹ {item.card.info.price}/100</p>
//                     <p className='Itemlist'>{item.card.info.description}</p>
//                 </div>
//             ))}

//         </div >
//     )
// }

// export default ItemList

import React from 'react';
import { IMG_PATH } from '../utilities/constants';

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div className='itemMenu'>
            {items.map((item) => (
                <div key={item.card.info.id} className='items'>
                    <div>
                        <p className='Itemlist'>{item.card.info.name}</p>
                        <p className='ItemlistPrice'>₹ {item.card.info.price / 100}</p>
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

export default ItemList;
