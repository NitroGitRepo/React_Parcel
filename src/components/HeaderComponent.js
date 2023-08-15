import { useState } from "react";

//Title Component
export const Title = ()=>(
    <img className="logo" alt="not loaded" src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png"/>
);

//Header Component
const HeaderComponent = ()=>{
    const [title, setTitle] = useState("Food Villa !!")
    console.log("Header Component");
    return(
        <div className="header">
            <Title/>
            <h3>{title}</h3>
            <div className="nav-items">
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Cart</li>
                      <li><button className="head-button" style={{display:"inline"}} onClick={()=>{setTitle("Changed ")}}>Change Title</button></li>
                  </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;