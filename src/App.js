import React, { useState } from 'react';
import './App.css';

function App() {
    const [urls, setUrls] = useState([]);
    const [numbers, setNumbers] = useState([]);

    const handleUrlChange = (event, index) => {
        const newUrls = [...urls];
        newUrls[index] = event.target.value;
        setUrls(newUrls);
    };

    const fetchNumbers = async() => {
            const response = await fetch(`http://20.244.56.144/numbers/primes${urls.map(url => `url=${encodeURIComponent(url)}`).join('&')}`);
    const data = await response.json();
    setNumbers(data.numbers);
  };

  return (
    <div className="App">
      <h1>Number Management App</h1>
      <div>
        {urls.map((url, index) => (
          <input
            key={index}
            type="text"
            value={url}
            onChange={event => handleUrlChange(event, index)}
            placeholder="Enter URL"
          />
        ))}
        <button onClick={fetchNumbers}>Fetch Numbers</button>
      </div>
      <div>
        <h2>Merged and Sorted Numbers:</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;