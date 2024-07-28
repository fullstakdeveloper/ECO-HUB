import React, { useState } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Shop from './components/shop';
import REACT_LOGO from './Assets/logo.svg';
import Image from "./components/image.js";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home.js"


function App() {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
      </Routes>

    </div>

  );
}

export default App;
