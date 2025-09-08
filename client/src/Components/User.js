import { useState } from "react";

const User = ({name})=>{
  let [count , setcount] = useState(0);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1> I am a frontend Develpoer</h1>
      <h2>count: {count}</h2>
      <button onClick={()=>{
        count = count-1;
        setcount(count);
      }}>increase</button>
      <h2>Name:{name}</h2>
      <h3>Location:up</h3>
      
    </div>
  )
}

export default User;