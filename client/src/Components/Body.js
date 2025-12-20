import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/useContext";



import { API_BASE } from "../../utils/constant";

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
      const response = await fetch(`${API_BASE}/api/search`);
      const json = await response.json();

      const restaurants =
        json?.data.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards ||
        [];

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
    <div className="body max-w-7xl mx-auto px-4">

      <div className="filter flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
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
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            onClick={() => {
              const topRated = listOfRestaurant.filter(
                (res) => res.card.card.info.avgRating > 4
              );
              setFilteredRestaurant(topRated);
            }}
          >
            ⭐ Top Rated
          </button>
        </div>

  
        <div className="flex items-center gap-2">
          <label className="text-gray-600 font-medium">User:</label>
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.card.card.info.id}
            key={restaurant.card.card.info.id}
            className="hover:scale-[1.02] transition-transform"
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
