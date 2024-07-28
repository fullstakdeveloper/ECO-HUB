import React from "react";
import './home.css';
import Image from './image';
import REACT_LOGO from '../Assets/logo.svg';
import BOTTLE from '../Assets/bottle.jpeg';
import BRICKS from '../Assets/bricks.jpg';
import SQUARES from '../Assets/8_squares.jpg';
import GREENLIGHT from '../Assets/green_light.jpg';
import MICROSOFT from '../Assets/microsoft.jpg';
import LOGO from '../Assets/ecohub_logo.png';

function Home() {
  return (
    <div className="Home">
      <div className="acts">
        <Image m={REACT_LOGO} event="Jashan" />
        <Image m={BOTTLE} event="Ricky" />
        <Image m={BRICKS} event="Jason" />
        <br />
        <Image m={SQUARES} event="Vadant" />
        <Image m={GREENLIGHT} event="Enkai" />
        <Image m={MICROSOFT} event="Lol" />
      </div>
    </div>
  );
}

export default Home;
