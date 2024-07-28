import React from 'react';
import Navbar from './navbar';
import './shop.css';
import trophyIcon from '../Assets/trophy_icon.png'; // Add the correct path to your trophy icon image

function Shop() {
  return (
    <div className="shop">
      <Navbar/>
      <div className="shop-content">
        <h1>Welcome to the Shop!</h1>
        <div className="score-container">
          <div className="score">
            <div className="score-shape">
              <img src={trophyIcon} alt="Trophy Icon" className="trophy-icon" />
            </div>
            <span>56</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
