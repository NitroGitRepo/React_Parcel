//Title Component
export const Title = ()=>(
    <img className="logo" alt="not loaded" src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png"/>
);

//ONLINE OFFLINE
const loggedInUser = ()=>{
    return true;
}

//Header Component
const HeaderComponent = ()=>{
    console.log("Header Component");

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Cart</li>
                      <li>{isLoggedIn}</li>
                      {
                        isLoggedIn ?
                        (<button onClick={()=> setIsLoggedIn(false)}>LOGOUT ➡️</button>)
                        :
                        (<button onClick={()=> setIsLoggedIn(true)}>LOGIN ⬅️</button>)
                      }
                  </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;