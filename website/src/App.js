import React, { useState } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import Shop from './components/shop';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'home':
        return <Home />;
      case 'shop':
        return <Shop />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
}

export default App;
