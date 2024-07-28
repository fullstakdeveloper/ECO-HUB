import React from 'react';
import Navbar from './navbar';
import Buy from './buy';
import './shop.css';
import trophyIcon from '../Assets/trophy_icon.png'; // Add the correct path to your trophy icon image

function Shop() {
  const colors = ['#4caf50', '#FFD700', '#A52A2A', '#800080', '#FF69B4', '#FF0000'];
  const names = ['iPhone 15', 'Samsung S21', 'Google Pixel', 'OnePlus 9', 'Nokia 3310', 'Sony Xperia'];

  return (
    <div className="shop">
      <Navbar />
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
        <div className="items-grid">
          {names.map((name, index) => (
            <Buy key={index} commodity={name} m={trophyIcon} price='15.99' color={colors[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
