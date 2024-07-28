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
    <div className="App">
      <Navbar/>
      <Login/>
      <div>
        <div className = "acts">
          <Image m={REACT_LOGO} event = "Jashan" />
          <Image m={BOTTLE} event = "Ricky"/>
          <Image m={BRICKS} event = "Jason"/>
          <Image m={SQUARES} event = "Vadant"/>
          <Image m={GREENLIGHT} event = "Enkai"/>
          <Image m={MICROSOFT} event = "Lol"/>
          <Image m={MICROSOFT} event = "Lol"/>
          <Image m={MICROSOFT} event = "Lol"/>
        </div>
      </div>

    </div>
  );
}

export default App;
