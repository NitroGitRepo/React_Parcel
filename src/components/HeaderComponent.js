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
<<<<<<< Updated upstream
    console.log("Heaer Component");
=======
    console.log("Header Component");

    const [isLoggedIn, setIsLoggedIn] = useState(true);

>>>>>>> Stashed changes
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Cart</li>
<<<<<<< Updated upstream
=======
                      <li>{isLoggedIn}</li>
                      {
                        isLoggedIn ?
                        (<button onClick={()=> setIsLoggedIn(false)}>LOGOUT ➡️</button>)
                        :
                        (<button onClick={()=> setIsLoggedIn(true)}>LOGIN ⬅️</button>)
                      }
>>>>>>> Stashed changes
                  </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;