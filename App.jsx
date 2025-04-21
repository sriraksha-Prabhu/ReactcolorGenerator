import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#3498db');
  const [copied, setCopied] = useState(false);

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
    setCopied(false); // Reset copied state when new color is generated
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="container">
      <h1>Dynamic Color Generator</h1>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <p className="color-code">{color}</p>
      <button onClick={generateColor}>Generate Color</button>
      <button onClick={copyToClipboard}>Copy Color Code</button>
      {copied && <p className="copied-msg">Copied!</p>}
    </div>
  );
};

export default App;
