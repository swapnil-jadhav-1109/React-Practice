// import React from 'react'
// import { useSelector } from 'react-redux'
// import ItemList from './ItemList';

// const Cart = () => {
// const cartItems = useSelector((store)=>store.cart.items);

//   return (
//     <div>
//     <h1 className='Cart-heading'>Cart</h1>
//     <div>
//       <ItemList items = {cartItems} /> 
//    {/* {cartItems.length===0} <h1>Cart is empty , Please add to the cart!!</h1> */}
//     </div>
//     </div>
//   )
// }

// export default Cart

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utilities/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch(); 
  const handleclickRemove = ()=>{
    dispatch(clearCart())
  }
  return (
    <div>
      <h1 className='Cart-heading'>Cart</h1>
      <button onClick={handleclickRemove}>Clear Cart</button>
      {cartItems.length === 0 ? (
        <p className='empty-cart-message'>Cart is empty. Please add items to the cart!</p>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
