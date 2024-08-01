import React from 'react';
import './home.css'

const Navbar = () => {
  return (
    <nav className="navbar">  
      <div className="navbar-container">
        <div className="navbar-logo">Campus Placement Portal</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Signin">Signin</a></li>
          <li><a href="/Register">Register</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;