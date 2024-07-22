// import React from 'react'
// import ShimerUi from './ShimerUi';
// import { useEffect , useState } from 'react';
// import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
// import Slider1Card from './Slider1Card';


// const Slide1 = () => {
//     const [listofTopRestaurant, setlistofTopRestaurant] = useState([]);
//     const [slide, setSlide] = useState(0);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         const json = await response.json();
//         console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setlistofTopRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       } catch (error) {
//         console.error("Failed to fetch top restaurants:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (loading) {
//       return <ShimerUi />;
//     }
  
//     const nextSlide = () => {
//       if (slide > -((listofTopRestaurant.length - 4))) {
//         setSlide(slide - 1);
//       }
//     };
  
//     const prevSlide = () => {
//       if (slide < 0) {
//         setSlide(slide + 1);
//       }
//     };
  
//     <div>
      
//     </div>


//   return (
//     <>
//      <div className="restaurant-heading2">
//         <h2 className='heading heading1'>What's on your mind?</h2>
//         <div className="slider-arrow">
//           <p className='arrow' onClick={prevSlide}><IoMdArrowBack /></p>
//           <p className='arrow' onClick={nextSlide}><IoMdArrowForward /></p>
//         </div>
//       </div>
//       <div className="Top-Restaurants">
//         <div className="Top-Restaurants-cards">
//           {listofTopRestaurant.map((restaurant, index) => (
//             <div 
//               key={index} 
//               className='top-cards shrink-0 duration-500' 
//               style={{ transform: `translateX(${slide * 100}%)` }}
//             >
//               <Slider1Card data={restaurant} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Slide1
