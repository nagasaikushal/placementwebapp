import React from 'react';
import './home.css'

const Navbar = () => {
  return (
    <nav className="navbar">  
      <div className="navbar-container">
        <div className="navbar-logo">Campus Placement Portal</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#companies">Companies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;