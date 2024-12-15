
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import RestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{ 
   
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
 
  if(resInfo===null) return <Shimmer/>;
  
  const {name} = resInfo.cards[2].card.card.info
  console.log(name)
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards || [];

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