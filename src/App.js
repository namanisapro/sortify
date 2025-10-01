import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer';
import Controls from './components/Controls';
import AlgorithmInfo from './components/AlgorithmInfo';
import { generateRandomArray } from './utils/arrayUtils';
import { sortingAlgorithms } from './algorithms/sortingAlgorithms';

function App() {
  // State management for the sorting visualizer
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(15);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(200);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [currentStep, setCurrentStep] = useState('');
  const [currentElement, setCurrentElement] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);
  const [sourcePosition, setSourcePosition] = useState(null);
  const [pivotIndex, setPivotIndex] = useState(null);
  const [activeRange, setActiveRange] = useState({ start: null, end: null });

  // Generate initial random array
  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  // Generate a new random array
  const generateNewArray = useCallback(() => {
    if (isAnimating) return;
    const newArray = generateRandomArray(arraySize);
    setArray(newArray);
    setSortedIndices([]);
    setComparingIndices([]);
    setCurrentStep('Array generated. Ready to sort!');
    setCurrentElement(null);
    setTargetPosition(null);
    setSourcePosition(null);
    setPivotIndex(null);
    setActiveRange({ start: null, end: null });
  }, [arraySize, isAnimating]);

  // Start sorting animation
  const startSorting = async () => {
    if (isAnimating || array.length === 0) return;
    
    setIsAnimating(true);
    setIsPaused(false);
    setSortedIndices([]);
    setComparingIndices([]);
    setCurrentElement(null);
    setTargetPosition(null);
    setSourcePosition(null);
    setPivotIndex(null);
    setActiveRange({ start: null, end: null });
    
    const sortingFunction = sortingAlgorithms[algorithm];
    await sortingFunction(
      [...array],
      setArray,
      setComparingIndices,
      setSortedIndices,
      setCurrentStep,
      setCurrentElement,
      setTargetPosition,
      setSourcePosition,
      setPivotIndex,
      setActiveRange,
      animationSpeed,
      () => isPaused
    );
    
    setIsAnimating(false);
    setComparingIndices([]);
    setCurrentStep('Sorting completed!');
    setCurrentElement(null);
    setTargetPosition(null);
    setSourcePosition(null);
    setPivotIndex(null);
    setActiveRange({ start: null, end: null });
  };

  // Pause/Resume functionality
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Stop sorting
  const stopSorting = () => {
    setIsAnimating(false);
    setIsPaused(false);
    setComparingIndices([]);
    generateNewArray();
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Sortify</h1>
        <p>Interactive visualization of popular sorting algorithms</p>
      </header>
      
      <main className="app-main">
        <div className="visualizer-section">
          <Controls
            arraySize={arraySize}
            setArraySize={setArraySize}
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            animationSpeed={animationSpeed}
            setAnimationSpeed={setAnimationSpeed}
            generateNewArray={generateNewArray}
            startSorting={startSorting}
            togglePause={togglePause}
            stopSorting={stopSorting}
            isAnimating={isAnimating}
            isPaused={isPaused}
          />
          
          <SortingVisualizer
            array={array}
            comparingIndices={comparingIndices}
            sortedIndices={sortedIndices}
            currentElement={currentElement}
            targetPosition={targetPosition}
            sourcePosition={sourcePosition}
            pivotIndex={pivotIndex}
            activeRange={activeRange}
          />
        </div>
        
        <AlgorithmInfo
          algorithm={algorithm}
          currentStep={currentStep}
          isAnimating={isAnimating}
          currentElement={currentElement}
          targetPosition={targetPosition}
          sourcePosition={sourcePosition}
          pivotIndex={pivotIndex}
          activeRange={activeRange}
          array={array}
        />
      </main>
      
      <footer className="app-footer">
        <p>Made by Naman</p>
      </footer>
    </div>
  );
}

export default App;