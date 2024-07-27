import React, { useState } from 'react'; // Import useState hook
import logo from './logo.svg';
import './App.css';

function App() 
{
  // Create state variables to store the input value and the submitted value
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the new input value (enable backspace)
  };


  const handleSubmit = () => {
    setSubmittedValue(inputValue); // Update the state with the submitted value
  };

  return (
    <div className="App">
      <input 
        value={inputValue} // Set the input value from the state
        onChange={handleInputChange} // Handle input change events
      />
      <button onClick={handleSubmit}>Submit</button>
      {submittedValue && <p>Stored value: {submittedValue}</p>}
    </div>
  );


  


}

export default App;
