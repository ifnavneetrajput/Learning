import resData from "../../utils/resData";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import React from "react";
const Body =()=>{

  const [filterList , setfilterList]=useState([]);

  useEffect(()=>{
    setfilterList(resData);
  },[])
  return(
    <div className="body">
      <div className="filter">
        <button className="btn" onClick={()=>{
          const filteredList =resData.filter((res)=>res.data.avgRating > 4);
          setfilterList(filteredList);
        }
        
        
      }
        
        
        >Top Rated Restaurant
        </button>         
      </div>

      <div className="res-container">
      {
        filterList.map((restaurant)=>(
       <RestaurantCard    key={restaurant.data.id} resData = {restaurant}/>
       )) }
      
    
     
      </div>

    </div>
  )
 }
export default Body;