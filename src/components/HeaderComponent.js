import { useState } from "react";

//Title Component
export const Title = ()=>(
    <img className="logo" alt="not loaded" src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png"/>
);

//Header Component
const HeaderComponent = ()=>{
    const [title, setTitle] = useState("Food Villa !!")

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log("Header Component");
    return(
        <div className="header">
            <Title/>
            <img  className ="bike-logo" alt = "bike"src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"/>
            <div className="nav-items">
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Cart</li>
                      <li><button className="head-button" style={{display:"inline"}} onClick={()=>{setTitle("Changed ")}}>Change Title</button></li>
                      {
                        isLoggedIn ? <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> : <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
                      }
                  </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;