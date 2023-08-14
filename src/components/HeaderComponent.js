//Title Component
export const Title = ()=>(
    <img className="logo" alt="not loaded" src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png"/>
);

//Header Component
const HeaderComponent = ()=>{
    console.log("Heaer Component");
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Cart</li>
                  </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;