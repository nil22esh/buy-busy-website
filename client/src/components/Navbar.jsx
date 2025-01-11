import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user, logoutUser } = useAuth(); // Get user and logout function from AuthContext

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>SwiftCart</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
              alt="Home Icon"
              className="nav-icon"
            />
            <span>Home</span>
          </Link>
          {user ? (
            <>
              <Link to="/orders" className="nav-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1007/1007959.png"
                  alt="Orders Icon"
                  className="nav-icon"
                />
                <span>My Orders</span>
              </Link>
              <Link to="/cart/:cartId" className="nav-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                  alt="Cart Icon"
                  className="nav-icon"
                />
                <span>Cart</span>
              </Link>
              <button onClick={logoutUser} className="nav-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10812/10812277.png"
                  alt="SignOut Icon"
                  className="nav-icon"
                />
                <span>SignOut</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6460/6460730.png"
                  alt="SignIn Icon"
                  className="nav-icon"
                />
                <span>SignIn</span>
              </Link>
              <Link to="/register" className="nav-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10812/10812277.png"
                  alt="SignUp Icon"
                  className="nav-icon"
                />
                <span>SignUp</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
