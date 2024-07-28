import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LOGO from '../Assets/ecohub_new.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={LOGO} alt="Logo" />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
        </div>
    );
}

export default Navbar;
