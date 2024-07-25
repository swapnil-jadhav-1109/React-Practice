// import React from 'react';

// const Slider1Card = ({ data }) => {
// //   const imageId = data?.imageId;
// //   console.log(imageId);
//   return (
//     <div>
//          <h2>images</h2>
//       {/* {imageId && (
//         <img 
//           className='Swiggy-dishes' 
//           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`} 
//           alt={`Dish image`} 
//         />
    
//       )} */}
     
//     </div>
//   );
// };

// export default Slider1Card;


import React from 'react';
import { IMG_PATH } from '../utilities/constants';

const Slider1Card = (props) => {
const img = props.data.imageId;
console.log(img);
  return (
    <div>
      <img 
        className='Swiggy-dishes '
        src={IMG_PATH + img} 
        alt={`Dish image`} 
      />
    </div>
  );
};

export default Slider1Card;
