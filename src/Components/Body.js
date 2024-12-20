import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/useContext";
const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [SearchText, setSearchText] = useState([]);
  const onlineStatus = useonlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6369411&lng=77.2056647&str=restaurant&trackingId=cd63b699-640b-171c-996a-3ee2edb5525c&submitAction=ENTER&queryUniqueId=3178d00b-3a74-5eb9-3a32-ef07d01871df"
      );

      let json = await response.json();
      //console.log(json);
      setlistOfRestaurant(
        json?.data.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
      setfilteredRestaurant(
        json?.data.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
      // console.log(json?.data?.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards?.[0].card?.card?.info?.name);
    } catch (err) {
      console.log("error is :", err);
    }
  };
  const { loggedInUser, setUserName } = useContext(userContext);

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like , you are offline !!! , Please check your internet connection
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterRestaurant = listOfRestaurant.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(SearchText.toLowerCase());
              });

              setfilteredRestaurant(filterRestaurant);
              console.log("button clicked");
            }}
          >
            Search
          </button>

          <div className="search m-4 p-4 flex items-center"></div>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.card.card.info.avgRating > 4
              );
              console.log("button clicked");
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>

          <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.card.card.info.id}
            key={restaurant.card.card.info.id}
          >
            {restaurant.card.card.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
