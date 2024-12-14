import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);
  //  console.log("child constructor is called")
    this.state ={
     userInfo:{
      name:"dummy",
      location:"up"
     }
    }

  
  }
  async componentDidMount(){
     try{
      let response = await fetch("https://api.github.com/users/ifnavneetrajput") 
      let data = await response.json();
      this.setState({
        userInfo:data
      });
     }catch(err){
      console.log("error is ",err);
     }
  }
  componentDidUpdate(){
    console.log("componenet did update")
  }

  componentWillUnmount(){
    console.log("component will unmount")
  }
  render(){
    const {name ,location , bio} = this.state.userInfo
      
    //console.log("child render called")
    return (
      <div className="user-card">
        <h1> I am a frontend Develpoer</h1>
       
        <h2>Name:{name}</h2>
        <h3>Bio:{bio}</h3>
        <h4>Location:{location}</h4>
        
      </div>
    )
  }
}
export default UserClass;