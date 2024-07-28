import React from "react";
import "./navbar.css";
import LOGO from '../Assets/ecohub_new.png';

function Navbar() {
    
    return (
        <div className="navbar">
            <img src={LOGO} alt="Logo" />
            <div>Home</div>
            <div>About</div>
            <div>Shop</div>
        </div>
    );
}

export default Navbar;
