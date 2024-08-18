import React from 'react';
import { IMG_PATH } from '../utilities/constants';
import { useDispatch } from 'react-redux';
import { addItems, removeItems } from '../utilities/cartSlice';

const CartInfo = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddClick = (item) => {
        dispatch(addItems(item));
    };

    const handleRemoveClick = (item) => {
        dispatch(removeItems(item));
    };

    return (
        <div className='itemMenu'>
            {items.map((item) => (
                <div key={item.card.info.id} className='items'>
                    <div className='iteminfo'>
                        <p className='Itemlist'>{item.card.info.name}</p>
                        <p className='ItemlistPrice'>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                        <p className='ItemlistDescription'>{item.card.info.description}</p>
                        <div className='img-btns'>
                            <button className='child-btn' onClick={() => handleRemoveClick(item)}>-</button>
                            <button className='child-btn' onClick={() => handleAddClick(item)}>+</button>
                        </div>
                    </div>
                    <div>
                        <img className='img-itemlist' src={IMG_PATH + item.card.info.imageId} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartInfo;
