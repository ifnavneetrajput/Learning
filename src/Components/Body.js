import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/useContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/search");
    const json = await response.json();

    const restaurants =
      json?.data.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  } catch (err) {
    console.log("Error fetching restaurants:", err);
  }
};

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const topRated = listOfRestaurant.filter(
                (res) => res.card.card.info.avgRating > 4
              );
              setFilteredRestaurant(topRated);
            }}
          >
            Top Rated Restaurant
          </button>

          <div className="search m-4 p-4 flex items-center">
            <label>UserName: </label>
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
