import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setshowIndex] = useState(null);

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards?.[2].card?.card?.info.name;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl mb-2">{name}</h1>
        <h2 className="text-gray-500 text-lg">Menu</h2>
      </div>

      <div className="space-y-4">
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            ShowItems={index === showIndex}
            setshowIndex={() => setshowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
