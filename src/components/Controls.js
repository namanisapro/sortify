import React from 'react';
import './Controls.css';

/**
 * Controls Component
 * Provides user interface for controlling the sorting visualization
 */
const Controls = ({
  arraySize,
  setArraySize,
  algorithm,
  setAlgorithm,
  animationSpeed,
  setAnimationSpeed,
  generateNewArray,
  startSorting,
  togglePause,
  stopSorting,
  isAnimating,
  isPaused
}) => {

  // Algorithm options with display names
  const algorithmOptions = [
    { value: 'bubble', label: 'Bubble Sort' },
    { value: 'selection', label: 'Selection Sort' },
    { value: 'insertion', label: 'Insertion Sort' },
    { value: 'merge', label: 'Merge Sort' },
    { value: 'quick', label: 'Quick Sort' }
  ];

  // Speed options - from slowest to fastest
  const speedOptions = [
    { value: 1000, label: 'Super Slow' },
    { value: 500, label: 'Slow' },
    { value: 200, label: 'Medium' },
    { value: 50, label: 'Fast' },
    { value: 10, label: 'Super Fast' }
  ];

  return (
    <div className="controls">
      <div className="controls-section">
        <h3>Array Configuration</h3>
        
        <div className="control-group">
          <label htmlFor="array-size">
            Array Size: <span className="value-display">{arraySize}</span>
          </label>
          <input
            id="array-size"
            type="range"
            min="5"
            max="20"
            value={arraySize}
            onChange={(e) => setArraySize(parseInt(e.target.value))}
            disabled={isAnimating}
            className="slider"
          />
        </div>

        <button
          onClick={generateNewArray}
          disabled={isAnimating}
          className="btn btn-secondary"
        >
          Generate New Array
        </button>
      </div>

      <div className="controls-section">
        <h3>Algorithm Selection</h3>
        
        <div className="control-group">
          <label htmlFor="algorithm-select">Choose Algorithm:</label>
          <select
            id="algorithm-select"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={isAnimating}
            className="select"
          >
            {algorithmOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="controls-section">
        <h3>Animation Settings</h3>
        
        <div className="control-group">
          <label htmlFor="speed-select">Animation Speed:</label>
          <select
            id="speed-select"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
            disabled={isAnimating}
            className="select"
          >
            {speedOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="controls-section">
        <h3>Sorting Controls</h3>
        
        <div className="button-group">
          <button
            onClick={startSorting}
            disabled={isAnimating}
            className="btn btn-primary"
          >
            Start Sorting
          </button>

          {isAnimating && (
            <>
              <button
                onClick={togglePause}
                className="btn btn-warning"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>

              <button
                onClick={stopSorting}
                className="btn btn-danger"
              >
                Stop
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;