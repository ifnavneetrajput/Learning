
const styleCard ={
  backgroundColor : "gray"
 };

 

const RestaurantCard =(props)=>{
  const {resData} = props;
  const{ name ,avgRating ,cuisines } = resData?.data;
  return(
    <div className="res-card" style = {styleCard}>
         <img className="res-img" src="https://i.pinimg.com/736x/fd/f6/ab/fdf6ab5a30b921bc4b8b68ccf5db040e.jpg"/>
      <h3>{name}</h3>
    

      <h4>{cuisines.join(",")}</h4>

      <h4>{avgRating}</h4>
      
    

    </div>
  )
 }
export default RestaurantCard;