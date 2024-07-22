// // import { useEffect, useState } from "react";
// // import ShimerUi from "./ShimerUi";

// // const Menu = () => {

// //     const [resInfo, setResInfo] = useState(null);
// //     useEffect(() => {
// //         resMenu();
// //     }, []);

// //     const resMenu = async () => {
// //         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6804639&lng=74.018261&restaurantId=155959&catalog_qa=undefined&submitAction=ENTER");
// //         const json = await data.json();
// //         console.log(json);
// //         setResInfo(json.data);

// //         if (resInfo === null) return <ShimerUi />

// //         const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card.card.info;
// //         console.log(resInfo.cards[2]?.card.card.info);
// //         const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

// //         console.log(itemCards);
// //     }
// //     return (
// //         <>
// //           <h1> {name} </h1>
// //           <p> {cuisines.join(" , ")} - {costForTwoMessage} </p>
// //            {
// //             itemCards.map((item)=>{
// //                 return  <li key={item.card.info.id}>
// //                 {item.card.info.name} - {"Rs."}
// //                 {item.card.info.price/100}
// //             </li>
                  
// //             })
// //            }
// //         </>
// //     )
// // }
// // export default Menu;

// import { useEffect, useState } from "react";
// import ShimerUi from "./ShimerUi";

// const Menu = () => {
//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         const resMenu = async () => {
//             try {
//                 const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6804639&lng=74.018261&restaurantId=155959&catalog_qa=undefined&submitAction=ENTER");
//                 const json = await data.json();
//                 console.log(json);
//                 setResInfo(json.data);
//             } catch (error) {
//                 console.error("Error fetching menu data:", error);
//             }
//         };
//         resMenu();
//     }, []);

//     if (resInfo === null) return <ShimerUi />;

//     const { name, cuisines, costForTwoMessage } = resInfo.cards[0]?.card.card.info || {};
//     const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
//     console.log(itemCards.itemCards[0].card.info.name);
    
//     return (
//         <>
//             <h1>{name}</h1>
//             <p>{cuisines?.join(" , ")} - {costForTwoMessage}</p>
//             <ul>
//                 {
//            itemCards.map((item, index)=>{
//             <li key ={index} >
//               {item.card.info.name};

//             </li>
//            })
           
//                 }
//                  </ul>
//         </>
//     );
// };

// export default Menu;

import { useEffect, useState } from "react";
import ShimerUi from "./ShimerUi";

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const resMenu = async () => {
            try {
                const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6804639&lng=74.018261&restaurantId=155959&catalog_qa=undefined&submitAction=ENTER");
                const json = await data.json();
                console.log(json);
                setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };
        resMenu();
    }, []);

    if (resInfo === null) return <ShimerUi />;

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card.card.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  console.log(itemCards);
    return (
        <>
            <h1>{name}</h1>
            <p>{cuisines?.join(" , ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item, index) => (
                    <li key={index}>
                         
                        {item.card.info.name} - Rs.{item.card.info.costForTwo / 100}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Menu;
