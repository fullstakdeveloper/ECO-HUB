import React from 'react';
import Navbar from './navbar';
import Buy from './buy';
import './shop.css';
import trophyIcon from '../Assets/trophy_icon.png'; // Add the correct path to your trophy icon image

import ipad from '../Assets/ipad.jpg';
import tshirt from '../Assets/tshirt.png';
import wallet from '../Assets/wallet.png';
import watch from '../Assets/watch.png';
import shoes from '../Assets/shoes.png';
import purfume from '../Assets/purfume.png';

function Shop() {
  const colors = ['#18dd9d', '#fef72f', '#de982e', '#ca2fff', '#ff1e9a', '#ff1b12'];
  const names = ['T-Shirt', 'Wallet', 'Perfume', 'Shoes', 'Watch', 'iPad'];
  const images = [tshirt, wallet, purfume, shoes, watch, ipad];
  const prices = ['1~20', '21~50', '50~71', '71~81', '81~91', '91+'];

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
            <Buy
              key={index}
              commodity={name}
              m={images[index]}
              price={prices[index]}
              color={colors[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
