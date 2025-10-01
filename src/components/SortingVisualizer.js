import React from 'react';
import './SortingVisualizer.css';

/**
 * SortingVisualizer Component
 * Renders the array as animated bars with color coding
 */
const SortingVisualizer = ({ 
  array, 
  comparingIndices, 
  sortedIndices, 
  currentElement, 
  targetPosition, 
  sourcePosition, 
  pivotIndex, 
  activeRange 
}) => {
  
  // Calculate bar width based on array size for responsive design
  const getBarWidth = () => {
    const containerWidth = 800; // Max container width
    const maxBarWidth = 20;
    const minBarWidth = 3;
    const calculatedWidth = Math.max(minBarWidth, Math.min(maxBarWidth, containerWidth / array.length - 2));
    return calculatedWidth;
  };

  // Get bar color based on its state
  const getBarColor = (index) => {
    if (pivotIndex === index) {
      return '#ff6b6b'; // Bright red for pivot element
    }
    if (sortedIndices.includes(index)) {
      return '#51cf66'; // Green for sorted elements
    }
    if (comparingIndices.includes(index)) {
      return '#ff8787'; // Light red for elements being compared
    }
    if (sourcePosition === index) {
      return '#ffd43b'; // Yellow for source position
    }
    if (targetPosition === index) {
      return '#74c0fc'; // Light blue for target position
    }
    if (activeRange.start !== null && activeRange.end !== null && 
        index >= activeRange.start && index <= activeRange.end) {
      return '#495057'; // Dark gray for active range
    }
    return '#868e96'; // Gray for unsorted elements
  };

  // Calculate bar height (normalize to container height)
  const getBarHeight = (value) => {
    const maxValue = Math.max(...array);
    const minHeight = 5;
    const maxHeight = 400;
    return Math.max(minHeight, (value / maxValue) * maxHeight);
  };

  return (
    <div className="sorting-visualizer">
      <div className="bars-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${getBarHeight(value)}px`,
              width: `${getBarWidth()}px`,
              backgroundColor: getBarColor(index),
              transform: comparingIndices.includes(index) ? 'scale(1.1)' : 'scale(1)',
            }}
            title={`Value: ${value}, Index: ${index}`}
          >
            {/* Show value on bar */}
            <span className="bar-value">{value}</span>
            
            {/* Show index below bar */}
            <span className="bar-index">{index}</span>
          </div>
        ))}
      </div>
      
      {/* Enhanced Legend */}
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color unsorted"></div>
          <span>Unsorted</span>
        </div>
        <div className="legend-item">
          <div className="legend-color comparing"></div>
          <span>Comparing</span>
        </div>
        <div className="legend-item">
          <div className="legend-color pivot"></div>
          <span>Pivot</span>
        </div>
        <div className="legend-item">
          <div className="legend-color source"></div>
          <span>Source</span>
        </div>
        <div className="legend-item">
          <div className="legend-color target"></div>
          <span>Target</span>
        </div>
        <div className="legend-item">
          <div className="legend-color active-range"></div>
          <span>Active Range</span>
        </div>
        <div className="legend-item">
          <div className="legend-color sorted"></div>
          <span>Sorted</span>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;