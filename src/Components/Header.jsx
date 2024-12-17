import { useState } from "react";
import LOGO_URL from "../../utils/constant";
import { Link } from "react-router-dom";

import useonlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{

  const [btnNameReact ,setbtnNameReact] =useState("Login");

  const onlineStatus = useonlineStatus();
  return(
   <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
    <div className="logo-container">
      <img  className="w-56"  src={LOGO_URL}/>
    </div>

    <div className="flex items-center">
      <ul className="flex p-4 m-4">
        <li className="px-4">onlineStatus :{onlineStatus ? "✅":"🔴"}</li>
        <li className="px-4"><Link to ='/'>Home</Link></li>
        <li className="px-4"><Link to='/about'>About</Link></li>
        <li className="px-4"><Link to='/contact'>Contact-us</Link></li>
        <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
        <li className="px-4">Cart</li>
        <button className="login" onClick={()=>{
          btnNameReact ==="Login"
          ? setbtnNameReact("Logout")
          : setbtnNameReact("Login");
        }}>
          {btnNameReact}

        </button>
        

      </ul>

    </div>

   </div>
  )
 }
 export default Header;