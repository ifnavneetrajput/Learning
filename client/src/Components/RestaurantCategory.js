import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setshowIndex, ShowItems }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto my-4 bg-white rounded-xl shadow-md">
        <div
          className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-gray-50 transition"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">{ShowItems ? "⬆️" : "⬇️"}</span>
        </div>

        {ShowItems && (
          <div className="px-4 pb-4">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
