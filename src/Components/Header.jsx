import { useState } from "react";
import LOGO_URL from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = ()=>{

  const [btnNameReact ,setbtnNameReact] =useState("Login");
  return(
   <div className ="header">
    <div className="logo-container">
      <img  className = "logo" src={LOGO_URL}/>
    </div>

    <div className="nav-items">
      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact-us</Link></li>
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