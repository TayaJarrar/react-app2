import React, { useState } from "react";
import "./Dash.css";

function Dash() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-title">
          <h2>Main Sections</h2>
        </div>
        <div className="taya-dropdown">
          <div>
            <h3 onClick={toggleDropdown1}>Engineering</h3>
            {isOpen1 && (
              <div className="dropdown-options">
                <ul>
                  <li>202</li>
                  <li>203</li>
                  <li>205</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <h3 onClick={toggleDropdown2}>Business</h3>
            {isOpen2 && (
              <div className="dropdown-options">
                <ul>
                  <li>308</li>
                  <li>609</li>
                  <li>204</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <h3 onClick={toggleDropdown3}>IT</h3>
            {isOpen3 && (
              <div className="dropdown-options">
                <ul>
                  <li>205</li>
                  <li>305</li>
                  <li>207</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Dash;
