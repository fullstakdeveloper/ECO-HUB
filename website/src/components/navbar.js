import React from 'react';
import './navbar.css';
import LOGO from '../Assets/ecohub_new.png';
import App from "../App.js";




function Navbar() {
  return (
    <div className="navbar">
      <img src={LOGO} alt="Logo" />
      <div>Home</div>
      <div>Shop</div>
      <div>About</div>
    </div>
  );
}

export default Navbar;
