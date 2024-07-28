// image.js
import './image.css';
import React from 'react';
import { motion } from "framer-motion"

function Image(props) {
  
  return (
    <motion.div className="state"
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.5 }
    }}
    >
      <p>{props.event}</p>
      <img src={props.m} alt="Event" />
      <div id="prog"></div>
      <input type = "file"/>
    </motion.div>
  );
}

export default Image;
