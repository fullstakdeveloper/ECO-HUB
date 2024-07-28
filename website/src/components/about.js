import React from 'react';
import './about.css';
import LOGO from '../Assets/ecohub_logo.png';
import Navbar from './navbar';
import BAH from '../Assets/image.png';


function About() {
  return (
    <div className="About">
      <Navbar/>
      
      <div className="content">
      <img src = {BAH} id = "jashan"></img>
      <div id = "cont">
        <h2 id = "text">ECO-HUB</h2>
        <div id = "broke">
          A way to help the environment with prizes.
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
