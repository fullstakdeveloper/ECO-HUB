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
        <h2>About EcoHub</h2>
        <p id = "broke">
          Eco Hub is an activity based game where people all over the world can participate to entertain 
          themselves or caring for their home environment or the environment. It was created for people all 
          over the world are waiting for upcoming games / video games and waste time into nothing to try reward full. 
          Instead, what they can do is playing our activities and engage with friendly ecosystem activities so they could enjoy 
          and the world to enjoy.
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
