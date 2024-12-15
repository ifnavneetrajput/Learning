import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import React from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../../utils/useOnlineStatus";
const Body =()=>{

  const [listOfRestaurant ,setlistOfRestaurant]=useState([]);
  const [filteredRestaurant , setfilteredRestaurant]=useState([]);
  const [SearchText ,setSearchText] = useState([]);
  const onlineStatus = useonlineStatus();
   



 useEffect(()=>{
  fetchData();
  },[])
  const fetchData= async()=>{

    try {
      let response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6369411&lng=77.2056647&str=restaurant&trackingId=cd63b699-640b-171c-996a-3ee2edb5525c&submitAction=ENTER&queryUniqueId=3178d00b-3a74-5eb9-3a32-ef07d01871df");

      let json = await response.json();
     // console.log(json);
      setlistOfRestaurant(json?.data.cards?.[1].groupedCard?. cardGroupMap?.RESTAURANT?.cards);
      setfilteredRestaurant(json?.data.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards)
     // console.log(json?.data?.cards?.[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards?.[0].card?.card?.info?.name);
    }
    catch(err)
    {
      console.log("error is :" ,err);
    }
  }


  if(onlineStatus===false) return <h1>Looks Like , you are offline !!! , Please check your internet connection</h1>
 
  return  listOfRestaurant.length===0
    ?  <Shimmer/> :
  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
           type="text"
           className="search-box"
           value={SearchText}
           onChange={(e)=>{
            setSearchText(e.target.value);
           }}

          />
          <button className="search-btn" 

            onClick={()=>{
              const filterRestaurant = listOfRestaurant.filter((res)=>{
              return  res.card.card.info.name.toLowerCase().includes(SearchText.toLowerCase());
              
             } )
              
              setfilteredRestaurant(filterRestaurant);
              console.log("button clicked")
            }}
          >
           Search

          </button>


        </div>
        <button 
        className="btn" onClick={()=>{
          const filteredList =listOfRestaurant.filter((res)=>res.card.card.info.avgRating > 4);
          console.log("button clicked");
          setfilteredRestaurant(filteredList);
        }
      }
        >Top Rated Restaurant
        </button>         
      </div>

      <div className="res-container">
      {
        filteredRestaurant.map((restaurant)=>(
    <Link to={'/restaurant/' +restaurant.card.card.info.id}  key={restaurant.card.card.info.id} >  <RestaurantCard   resData = {restaurant}/></Link>
       )) }
      
    
     
      </div>

    </div>
  )
 }
export default Body;