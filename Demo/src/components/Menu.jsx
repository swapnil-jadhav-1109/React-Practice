

import { useEffect, useState } from "react";
import ShimerUi from "./ShimerUi";
import { useParams } from "react-router-dom";
import useMenu from "../utilities/useMenu";
import ResCategory from "./ResCategory";

const Menu = () => {
    const { resId } = useParams();


    const resInfo = useMenu(resId);

   

    if (resInfo === null) return <ShimerUi />;

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const Categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category =>
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(Categories);
    return (
        <>
            <div className="Menu">
                <h1>{name}</h1>
                <p className="Menu">{cuisines?.join(" , ")} - {costForTwoMessage}</p>


                {Categories.map((category, index) => 
                <ResCategory key={category.card.card.title}
                 data={category?.card?.card}
            
                 />)}



            </div>
            {/* <ul>
                {itemCards.map((item, index) => (
                    <li key={index}>
                        {item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul> */}

        </>
    );
};

export default Menu;
