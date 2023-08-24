import { useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
//Title Component
export const Title = () => (
  <Link to="/">
    <img className="logo" alt="not loaded" src={Logo} />
  </Link>
);

//Header Component
const HeaderComponent = () => {
  const [title, setTitle] = useState("Food Villa !!");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Render - Header Component");

  return (
    <div className="header">
      <Title />
      <img
        className="bike-logo"
        alt="bike"
        src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
      />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>

          <li>
            <button
              className="head-button"
              style={{ display: "inline" }}
              onClick={() => {
                setTitle("Changed ");
              }}
            >
              Change Title
            </button>
          </li>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
