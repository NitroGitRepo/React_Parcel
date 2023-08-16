import { useEffect } from "react";
const FooterComponent = ()=>{
    console.log("Render - Footer Componenent");
    useEffect(()=>{
        console.log("USE EFFECT - Footer Component");
    },[])
    return (
        <h4>Footer Component</h4>
    )
}
export default FooterComponent;