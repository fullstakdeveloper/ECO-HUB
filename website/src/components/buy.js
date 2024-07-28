import './buy.css';
import React from 'react';
import { motion } from "framer-motion"

function Buy(props) {
  return (
    <motion.div className="buy-component"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
    >
      <p>{props.commodity}</p>
      <img src={props.m} alt="Item" />
      <div className="price" style={{ backgroundColor: props.color }}>
        {props.price}
      </div>
      <div className="buy-button">Buy</div>
    </motion.div>
  );
}

export default Buy;
