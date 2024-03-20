import React from "react";
import "./nav.css";
import adminImage from "../../public/admin.png";

function Nav() {
  return (
    <nav className="navbar">
      <div className="admin-image-container">
        <img src={adminImage} alt="Admin" className="admin-image" />
      </div>
      <ul className="listone">
        <li>Home</li>
        <div className="AboutDiv">
          <li> About us</li>
        </div>
      </ul>
      <div className="AdminDiv">
        <li> Admin</li>
      </div>
    </nav>
  );
}

export default Nav;
