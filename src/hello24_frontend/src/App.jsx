import React, { useState } from 'react';
//import './App.css';

const App = () => {
  const [speed, setSpeed] = useState('');
  const [unit, setUnit] = useState('km/h');
  const [convertedSpeeds, setConvertedSpeeds] = useState({});

  const handleSpeedChange = (e) => setSpeed(e.target.value);
  const handleUnitChange = (e) => setUnit(e.target.value);

  const convertSpeed = () => {
    const speedValue = parseFloat(speed);
    if (isNaN(speedValue) || speedValue < 0) {
      alert('Please enter a valid non-negative number for speed.');
      return;
    }

    let kmph, mph, mps;

    switch (unit) {
      case 'km/h':
        kmph = speedValue;
        mph = speedValue * 0.621371;
        mps = speedValue * 0.277778;
        break;
      case 'mph':
        kmph = speedValue * 1.609344;
        mph = speedValue;
        mps = speedValue * 0.44704;
        break;
      case 'm/s':
        kmph = speedValue * 3.6;
        mph = speedValue * 2.236936;
        mps = speedValue;
        break;
      default:
        return;
    }

    setConvertedSpeeds({
      kmph: kmph.toFixed(2),
      mph: mph.toFixed(2),
      mps: mps.toFixed(2),
    });
  };

  return (
    <div className="container">
      <h1>Speed Calculator</h1>
      <div className="input-group">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          id="speed"
          value={speed}
          onChange={handleSpeedChange}
          placeholder="Enter speed"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="unit">Unit:</label>
        <select
          id="unit"
          value={unit}
          onChange={handleUnitChange}
          className="input"
        >
          <option value="km/h">km/h</option>
          <option value="mph">mph</option>
          <option value="m/s">m/s</option>
        </select>
      </div>
      <button onClick={convertSpeed} className="button">Convert Speed</button>
      {convertedSpeeds.kmph && (
        <div className="result">
          <h2>Speed in km/h: {convertedSpeeds.kmph} km/h</h2>
          <h2>Speed in mph: {convertedSpeeds.mph} mph</h2>
          <h2>Speed in m/s: {convertedSpeeds.mps} m/s</h2>
        </div>
      )}
    </div>
  );
};

export default App;
