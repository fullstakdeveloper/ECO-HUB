import React from 'react';
import './about.css';
import Navbar from './navbar';
import BAH from '../Assets/image.png';
import people from '../Assets/people.png';

function About() {
  return (
    <div className="About">
      <Navbar />
      <div className="content">
        <img src={BAH} id="background-image" alt="Background" />
        <div id="text-container">
          <h1 id="title">EcoHub</h1>
          <div id="signup">Sign Up</div>
          <div id="intro">
            A fun way to help the environment with prizes!
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-content">
          <h2>What is EcoHub?</h2>
          <p>
            Eco Hub encourages people all over the world to participate to take care
            of our environment. With an account, different eco-centered challenges
            will be available to complete. Each challenge will earn you trophies that
            can then be traded in for items in the shop.
          </p>
        </div>
        <img src={people} id="people-image" alt="People participating" />
      </div>
    </div>
  );
}

export default About;
