import './buy.css';
import React from 'react';
import { motion } from 'framer-motion';

function Buy(props) {
  return (
    <motion.div
      className="state"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
    >
      <p>{props.name}</p>
      <img src={props.m} alt="Item" />
      <p className="price">{props.price}</p>
      <div className="buy-button">Buy</div>
    </motion.div>
  );
}

export default Buy;
