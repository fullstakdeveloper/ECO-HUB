import React from 'react';
import './navbar.css';
import LOGO from '../Assets/ecohub_new.png';

function Navbar({ setActiveComponent }) {
  return (
    <div className="navbar">
      <img src={LOGO} alt="Logo" />
      <div onClick={() => setActiveComponent('home')}>Home</div>
      <div onClick={() => setActiveComponent('shop')}>Shop</div>
      <button onClick={() => setActiveComponent('about')}>About</button>
    </div>
  );
}

export default Navbar;
