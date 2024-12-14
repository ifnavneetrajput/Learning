 import React from "react";
 import ReactDOM from "react-dom/client"

 import Header from "./Components/Header";
import Body from "./Components/Body";

import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
 
 

const AppLayout=()=>{
 return  <div className ="app"> 
  <Header/>
   <Outlet/>
   </div>
 
}

const appRoute = createBrowserRouter([
   {
      path: '/',
      element :<AppLayout/>,
      children:[
         
         {
            path :'/',
            element:<Body/>
         },
            {
               path: '/contact',
               element :<Contact/>
         
            },
            {
               path:'/about',
               element:<About/>
            },
            {
               path:'/restaurant/:resId',
               element:<RestaurantMenu/>
            }
         
        
      ],
      errorElement:<Error/>

   },
  
])



const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={appRoute}/>);