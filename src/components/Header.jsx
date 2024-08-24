import { useState,useEffect,useContext } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
import useOnline from "../Hooks/useOnline";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
   // call custom hook useLocalStorage for getting localStorage value of user
   const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage])

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();


  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
        
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage()
                  setIsLoggedin(false);
                }}
              >
                Logout<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;