import React from "react";
import user_profile from "./Icons/icons8-avatar-100-user-profile.png";
import "./CSS/Header.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="App-title">
        <h1 className="h1">Chat-App</h1>
      </div>
      <div className="Navbar-profile">
        <div className="nav-left">
          <img src={user_profile} height={55} width={55} alt="user_profile" />
          <span>User-Name</span>
        </div>
        <div className="nav-right">
          <button>Register</button>

          <button>Login</button>
          <button>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
