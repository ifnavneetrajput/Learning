import { useState } from "react";
import { useEffect } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{ 
   
  const [resInfo ,setresInfo]= useState(null);

  const {resId} = useParams();
 // console.log(params);
  useEffect(()=>{
    fetchMenu();
  },[])

  const fetchMenu = async() =>{
    try{
      let response = await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId="+resId+"&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A27714%2C%22primaryRestaurantId%22%3A322437%2C%22cloudinaryId%22%3A%22a16yrlrtgmi37nnagibq%22%2C%22brandId%22%3A27714%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION");

      let json = await response.json();

      //console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info.name)


    //  console.log(json.data.cards[0].card.card.text)

      setresInfo(json.data);
    }catch(err){
     console.log("error is " , err);
    }

    
  }
  if(resInfo===null) return <Shimmer/>;
  //const {name} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const {name} = resInfo.cards[2].card.card.info
  console.log(name)
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards || [];

// console.log(itemCards)

return (
  <div>
    <h1>{name}</h1>
    <h1>Menu</h1>
    {itemCards.length > 0 ? (
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    ) : (
      <h2>Data not found</h2>
    )}
  </div>
);
}

export default RestaurantMenu;