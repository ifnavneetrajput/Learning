 import React from "react";
 import ReactDOM from "react-dom/client"
// JSX => React.createelement =>ReactElement =>JS object => HTMLElement(render);
// React element create an object when we render it becomes html element 
const heading = React.createElement("h1" ,{id:"heading" }, "shiv is here");
//console.log(heading);

//JSX React
const jsxHeading = <h1>  Nmaste React using jsx</h1>

// React Fuctional componenet
const Tittle =()=>
  
  (
    <h1>this is tittle</h1>
  )

  const number = 1000;

const HeadingComponenet = ()=> (
  <>
    <Tittle/>
  <h2>{number}</h2>
   {jsxHeading}
   <h1> 
  Namaste React functional component</h1>
  </>);



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponenet/>)