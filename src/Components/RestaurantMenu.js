import { useState } from "react";
import { useEffect } from "react";
import shimmer from './Shimmer';


const RestaurantMenu = ()=>{
   
  const [resInfo ,setresInfo]= useState(null);
  useEffect(()=>{
    fetchMenu();
  },[])

  const fetchMenu = async() =>{
    try{
      let response = await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId=231167&catalog_qa=undefined&submitAction=ENTER");

      let json = await response.json();

      console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info.name)


      console.log(json.data.cards[0].card.card.text)

      setresInfo(json.data);
    }catch(err){
     console.log("error is " , err);
    }

    
  }
  if(resInfo===null) return <shimmer/>;
  const {name} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;


  return (
    <div>
      <h1>{resInfo.cards[0].card.card.text}</h1>
     

      <h1>Menu</h1>
      <ul>
        {resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item)=>{
         return <li>{item.card.info.name}</li>
        })}
      
        
      </ul>
    </div>
  )
}

export default RestaurantMenu;