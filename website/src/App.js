import React, { useState } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import Shop from './components/shop';
import REACT_LOGO from './Assets/logo.svg';
import Image from "./components/image.js";

function App() {
  return (
    <>

    <div className="App">
      <Navbar/>
      <div>
        <div className = "acts">
          <Image m={REACT_LOGO} event = "Jashan" />
          <Image m={REACT_LOGO} event = "Ricky"/>
          <Image m={REACT_LOGO} event = "Jason"/>
          <Image m={REACT_LOGO} event = "Vadant"/>
          <Image m={REACT_LOGO} event = "Enkai"/>
          <Image m={REACT_LOGO} event = "Lol"/>
          <Image m={REACT_LOGO} event = "Lol"/>
          <Image m={REACT_LOGO} event = "Lol"/>
        </div>
      </div>
      </div>
      </>
  );
}

export default App;
