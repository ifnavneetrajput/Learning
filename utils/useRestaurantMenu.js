import { useEffect, useState } from "react";

const useRestaurantMenu =(resId)=>{
  console.log(resId)
  const [resInfo , setresInfo]= useState(null);


  useEffect(()=>{
      fetchMenu();
  },[])

  const fetchMenu = async()=>{
      try{
        let response = await fetch(" https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        let json = await response.json();
      // console.log(json);
        setresInfo(json.data);

      }catch(err){
        console.log("error is " ,err);
      }
  }
  return resInfo;
}

export default useRestaurantMenu;