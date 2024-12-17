
const styleCard ={
  backgroundColor : "gray"
 };

 

const RestaurantCard =(props)=>{
  const {resData} = props;
  const{ name ,avgRating ,cuisines } = resData?.card.card.info;
  return(
    <div  className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
         <img      className="rounded-lg" src="https://i.pinimg.com/736x/fd/f6/ab/fdf6ab5a30b921bc4b8b68ccf5db040e.jpg"/>
      <h3  className="font-bold py-4 text-lg">{name}</h3>
    

      <h4>{cuisines.join(",")}</h4>

      <h4>{avgRating}</h4>
      
    

    </div>
  )
 }
export default RestaurantCard;