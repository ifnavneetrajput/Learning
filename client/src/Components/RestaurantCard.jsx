const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } =
    resData?.card.card.info;

  return (
    <div className="w-[260px] rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        className="h-40 w-full object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>

        <h4 className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </h4>

        <div className="mt-2 flex items-center justify-between">
          <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md">
            ⭐ {avgRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 z-10 bg-black text-white text-xs px-2 py-1 rounded-md">
          PROMOTED
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
