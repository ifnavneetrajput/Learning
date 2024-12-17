import { useEffect, useState } from "react";

const useRestaurantMenu =(resId)=>{
  const [resInfo , setresInfo]= useState(null);


  useEffect(()=>{
      fetchMenu();
  },[])

  const fetchMenu = async()=>{
      try{
        let response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId="+resId+"&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A27714%2C%22primaryRestaurantId%22%3A322437%2C%22cloudinaryId%22%3A%22a16yrlrtgmi37nnagibq%22%2C%22brandId%22%3A27714%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION");
        let json = await response.json();
        setresInfo(json.data);

      }catch(err){
        console.log("error is " ,err);
      }
  }
  return resInfo;
}

export default useRestaurantMenu;