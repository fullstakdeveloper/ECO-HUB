import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './navbar.css';
import LOGO from '../Assets/ecohub_new.png';
import App from "../App.js";
import About from '../components/about';
import Shop from '../components/shop';
import Home from "../components/home.js"


function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={LOGO} alt="Logo" />
      <div onClick={()=>{navigate('/')}}>Home</div>
      <div onClick={()=>{navigate('/about')}}>About</div>
      <div onClick={()=>{navigate('/shop')}}>Shop</div>

    
    </div>
  );
}

export default Navbar;
