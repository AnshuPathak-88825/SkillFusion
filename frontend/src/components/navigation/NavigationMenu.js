import React from 'react';
import { Link } from 'react-router-dom';
// import {logo1} from "./logo.png"
function NavigationMenu() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-logo">
          <Link to="/">
            <img src="logo.png" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationMenu;
