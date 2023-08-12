import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = (
    <h1>
        Heading of header
    </h1>
)
const Title = ()=> (
    <h1 id="title">
        Namaste React Using JSX ❗
    </h1>
); 

//react component
//Functionl component
//1)Name of component starts with capital letter

// const HeaderComponent = ()=>{
//     return <h1>Namaste React Functional Component</h1>
// }
const HeaderComponent = ()=>{
    return (
        <div>
             {heading}
            {Title()}
            {<Title/>}
            {10+20}
            <h1>Namaste React Functional Component</h1>
        </div>
    )
}

const root  = ReactDOM.createRoot(document.getElementById("root")); 
root.render(HeaderComponent());
