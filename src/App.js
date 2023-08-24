import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"; 
import AboutComponent from "./components/AboutComponent";
import ErrorComponent from "./components/ErrorComponent";
import ContactComponent from "./components/ContactComponent";
//Resturant Card
//Body Component
//Footer Component  





//AppLayout
const AppLayout = ()=>{
  console.log("Render - App Component");
     return(
        <>
          <HeaderComponent/>
           <Outlet/>
          <FooterComponent/>
        </>
     )
}

const appRouter = createBrowserRouter([
  {
     path :"/", 
     element : <AppLayout/>,
     errorElement : <ErrorComponent/>,
     children :[
       {
           path  :"/",
           element:<BodyComponent/>
       },
       {
        path :"/about",
        element :<AboutComponent/>
       },{
         path :"/contact",
         element : <ContactComponent/>
       }
     ]
   },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);