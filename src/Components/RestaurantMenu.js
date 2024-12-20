import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>  {  
  const { resId } = useParams();

  const [showIndex, setshowIndex] = useState(null);

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards?.[2].card?.card?.info.name;
  console.log(name);
  const cards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(cards);

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];
  // console.log(itemCards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h1 className="font-bold">Menu</h1>

      {categories.map((category, index) => (
        <RestaurantCategory  
          key={category?.card?.card.title}
          data={category?.card?.card}
          ShowItems={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
