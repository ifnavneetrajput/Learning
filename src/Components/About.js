import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../../utils/useContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent did mount called");
  }
  render() {
    console.log("parent render ");
    return (
      <div>
        <div>
          
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </userContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;
