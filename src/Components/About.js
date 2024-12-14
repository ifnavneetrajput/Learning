import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
      super(props);
      console.log("parent constructor")
    }
      componentDidMount(){
        console.log("parent did mount called")
      }
    render(){
      console.log("parent render ")
      return (
        <div >
        {/* <User name = {"Navneet (function)"}/>
     */}
          <UserClass />  
            
          
        </div>
      )
    }
}

export default About;