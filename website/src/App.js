import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
// import logo from './logo.svg';
import './App.css';

function App() {
  // Create state variables to store the input value and the list of submitted values
  const [inputValue, setInputValue] = useState('');
  const [submittedValues, setSubmittedValues] = useState([]);

  // Handle the input change event
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the new input value
  };

  // Handle the submit button click event
  const handleSubmit = () => {
    const newSubmittedValues = [...submittedValues, inputValue]; // Add the new input value to the list
    setSubmittedValues(newSubmittedValues); // Update the state with the new list
    localStorage.setItem('submittedValues', JSON.stringify(newSubmittedValues)); // Save the list to local storage
    setInputValue(''); // Clear the input field
  };

  // Handle the delete button click event
  const handleDelete = (index) => {
    const newSubmittedValues = submittedValues.filter((_, i) => i !== index); // Remove the item at the given index
    setSubmittedValues(newSubmittedValues); // Update the state with the new list
    localStorage.setItem('submittedValues', JSON.stringify(newSubmittedValues)); // Save the new list to local storage
  };

  // Retrieve the stored values from local storage when the component mounts
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('submittedValues'));
    if (storedValues) {
      setSubmittedValues(storedValues); // Set the state with the stored values
    }
  }, []);

  // Handle the download button click event
  const handleDownload = () => 
  {
    const blob = new Blob([submittedValues.join('\n')], { type: 'text/plain' }); // Create a Blob from the list of submitted values
    // The \n is for making the items in the array as a vertical list

    const url = URL.createObjectURL(blob); // Create a URL for the Blob
    const a = document.createElement('a'); // Create a temporary <a> element
    a.href = url;
    a.download = 'stored_values.txt'; // Set the download attribute with a filename
    document.body.appendChild(a); // Append the <a> element to the document body
    a.click(); // Programmatically click the <a> element to trigger the download
    document.body.removeChild(a); // Remove the <a> element from the document body
    URL.revokeObjectURL(url); // Revoke the object URL
  };

  return (
    <div className="App">
      <input 
        value={inputValue} // Set the input value from the state
        onChange={handleInputChange} // Handle input change events
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {submittedValues.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => handleDelete(index)}>Delete</button> {/* Add a delete button at the end of each item */}
          </li>
        ))}
      </ul>
      {submittedValues.length > 0 && (
        <button onClick={handleDownload}>Download</button> // Add a download button
      )}
    </div>
  );
}

export default App;
