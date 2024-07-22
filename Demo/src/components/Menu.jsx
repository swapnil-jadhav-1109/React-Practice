

import { useEffect, useState } from "react";
import ShimerUi from "./ShimerUi";
import { useParams } from "react-router-dom";

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        const resMenu = async () => {
            try {
                const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6804639&lng=74.018261&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
                const json = await data.json();
                console.log(json);
                setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };
        resMenu();
    }, [resId]);

    if (resInfo === null) return <ShimerUi />;

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    console.log(itemCards);

    return (
        <>
            <h1>{name}</h1>
            <p>{cuisines?.join(" , ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item, index) => (
                    <li key={index}>
                        {item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Menu;
