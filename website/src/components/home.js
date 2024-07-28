import React, { useState } from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import Shop from '../components/shop';
import REACT_LOGO from '../Assets/logo.svg';
import Image from "../components/image.js";
import Banner from "./banner.js";
import './home.css'

function Home() {
  return (
    <>

    <div className="App">
      <Navbar/>
      <div className = 'nested'>
        <div className = "acts">
          <Image m={REACT_LOGO} event = "Waste less Challenge" />
          <Image m={REACT_LOGO} event = "Conserving Energy Challenge"/>
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
      <Banner/>
      </div>
      </>
  );
}

export default Home;