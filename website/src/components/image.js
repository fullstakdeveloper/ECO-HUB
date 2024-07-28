// image.js
import './image.css';
import React from 'react';

function Image(props) {
  return (
    <div className="state">
      <h1>{props.event}</h1>
      <img src={props.m} alt="Event" />
      <div id="prog"></div>
      <input type = "file"/>
    </div>
  );
}

export default Image;