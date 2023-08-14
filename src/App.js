import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";

//Resturant Card
//Body Component
//Footer Component

//AppLayout
const AppLayout = ()=>{
     return(
        <>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
        </>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);