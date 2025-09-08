const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData)
  const { name, avgRating, cuisines, cloudinaryImageId } =
    resData?.card.card.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h4>{cuisines.join(",")}</h4>

      <h4>{avgRating}</h4>
    </div>
  );
};

// Higher order finctions
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
