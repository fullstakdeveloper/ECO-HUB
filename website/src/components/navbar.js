import React from "react";
import "./navbar.css";
import LOGO from '../Assets/ecohub_new.png';

function Navbar() {
    
    return (
        <div className="navbar">
            <img src={LOGO} alt="Logo" />
            <div><a href = "../App.js">Home</a></div>
            <div><a>About</a></div>
            <div><a>Shop</a></div>
        </div>
    );
}

export default Navbar;
// my name is ricky