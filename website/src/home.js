import React, { useState } from 'react';
import Navbar from './navbar.js';
import About from './about.js';
import Shop from './shop.js';
import REACT_LOGO from './Assets/logo.svg';
import Image from "./components/image.js";
import './home.css;

function Home() {
  return (
    <>

    <div className="Home">
      <Navbar/>
      <div className = 'nested'>
        <div className = "acts">
          <Image m={REACT_LOGO} event = "Waste less Challenge" />
          <Image m={REACT_LOGO} event = "Ricky"/>
          <Image m={REACT_LOGO} event = "Jason"/>
          <Image m={REACT_LOGO} event = "Vadant"/>
          <Image m={REACT_LOGO} event = "Enkai"/>
          <Image m={REACT_LOGO} event = "Lol"/>
          <Image m={REACT_LOGO} event = "Lol"/>
          <Image m={REACT_LOGO} event = "Lol"/>
        </div>

        <div className = "scoreboard">
        </div>
      </div>
      </div>
      </>
  );
}

export default ;
