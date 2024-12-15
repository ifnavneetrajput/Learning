import { useState } from "react";
import LOGO_URL from "../../utils/constant";
import { Link } from "react-router-dom";

import useonlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{

  const [btnNameReact ,setbtnNameReact] =useState("Login");

  const onlineStatus = useonlineStatus();
  return(
   <div className ="header">
    <div className="logo-container">
      <img  className = "logo" src={LOGO_URL}/>
    </div>

    <div className="nav-items">
      <ul>
        <li>onlineStatus :{onlineStatus ? "🟩":"🔴"}</li>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact-us</Link></li>
        <li><Link to='/grocery'>Grocery</Link></li>
        <li>Cart</li>
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