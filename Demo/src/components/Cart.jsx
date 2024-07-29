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
import { useSelector } from 'react-redux';
import ItemList from './ItemList';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className='Cart-heading'>Cart</h1>
      {cartItems.length === 0 ? (
        <h2 className='empty-cart-message'>Cart is empty. Please add items to the cart!</h2>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
