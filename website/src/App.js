import React, { useState } from 'react';
import './App.css';

function App() {

  // Create a state variable to store the input value

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => 
  {
    setInputValue(event.target.value); // new input value
  };

  return (
    <div className="App">
      <input value={inputValue} // Set the input value from the state
        onChange={handleInputChange}
      />
      <p>Stored value: {inputValue}</p>
    </div>
  );
}

export default App;
