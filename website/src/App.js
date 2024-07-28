// app.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Image from './components/image';
import './App.css';
import LOGO from './logo.svg';

function App() {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<Image m = {LOGO} />);

  return (
    <div className="App">
      
    </div>
  );
}



export default App;
