import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="/ExamGuardLogo2.jpg" alt="ExamGuard Logo" className="logo" />
        <h1 className="heading">ExamGuard</h1>
      </div>
    </div>
  )
}

export default Header