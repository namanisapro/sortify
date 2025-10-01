import { sleep, swap } from '../utils/arrayUtils';

/**
 * Bubble Sort Algorithm with Animation
 * Time Complexity: O(n²) | Space Complexity: O(1)
 */
const bubbleSort = async (arr, setArray, setComparingIndices, setSortedIndices, setCurrentStep, setCurrentElement, setTargetPosition, setSourcePosition, setPivotIndex, setActiveRange, speed, isPaused) => {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    setActiveRange({ start: 0, end: n - i - 1 });
    setCurrentStep(`Pass ${i + 1}: Bubbling largest element to position ${n - i - 1}`);
    await sleep(speed);
    
    for (let j = 0; j < n - i - 1; j++) {
      while (isPaused()) {
        await sleep(100);
      }
      
      // Highlight comparing elements
      setComparingIndices([j, j + 1]);
      setCurrentElement(arr[j]);
      setSourcePosition(j);
      setTargetPosition(j + 1);
      setCurrentStep(`Comparing ${arr[j]} at position ${j} with ${arr[j + 1]} at position ${j + 1}`);
      await sleep(speed);
      
      if (arr[j] > arr[j + 1]) {
        setCurrentStep(`${arr[j]} > ${arr[j + 1]}, swapping positions ${j} and ${j + 1}`);
        swap(arr, j, j + 1);
        swapped = true;
        setArray([...arr]);
        await sleep(speed);
      } else {
        setCurrentStep(`${arr[j]} ≤ ${arr[j + 1]}, no swap needed`);
        await sleep(speed);
      }
    }
    
    // Mark the last element as sorted
    setSortedIndices(prev => [...prev, n - i - 1]);
    setCurrentStep(`Element ${arr[n - i - 1]} is now in its final position ${n - i - 1}`);
    setComparingIndices([]);
    setSourcePosition(null);
    setTargetPosition(null);
    await sleep(speed);
    
    if (!swapped) {
      setCurrentStep('Array is already sorted!');
      break;
    }
  }
  
  // Mark first element as sorted
  setSortedIndices(prev => [...prev, 0]);
  setActiveRange({ start: null, end: null });
};

/**
 * Selection Sort Algorithm with Animation
 * Time Complexity: O(n²) | Space Complexity: O(1)
 */
const selectionSort = async (arr, setArray, setComparingIndices, setSortedIndices, setCurrentStep, setCurrentElement, setTargetPosition, setSourcePosition, setPivotIndex, setActiveRange, speed, isPaused) => {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    setActiveRange({ start: i, end: n - 1 });
    setSourcePosition(i);
    setCurrentElement(arr[i]);
    setCurrentStep(`Pass ${i + 1}: Finding minimum element in range [${i}, ${n - 1}] to place at position ${i}`);
    await sleep(speed);
    
    for (let j = i + 1; j < n; j++) {
      while (isPaused()) {
        await sleep(100);
      }
      
      setComparingIndices([minIdx, j]);
      setTargetPosition(minIdx);
      setCurrentStep(`Current minimum: ${arr[minIdx]} at position ${minIdx}. Comparing with ${arr[j]} at position ${j}`);
      await sleep(speed);
      
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        setTargetPosition(minIdx);
        setCurrentStep(`New minimum found: ${arr[j]} at position ${j}. This will be moved to position ${i}`);
        await sleep(speed);
      }
    }
    
    if (minIdx !== i) {
      setCurrentStep(`Moving minimum element ${arr[minIdx]} from position ${minIdx} to position ${i}`);
      swap(arr, i, minIdx);
      setArray([...arr]);
      await sleep(speed);
    } else {
      setCurrentStep(`Element ${arr[i]} is already in correct position ${i}`);
      await sleep(speed);
    }
    
    setSortedIndices(prev => [...prev, i]);
    setComparingIndices([]);
    setSourcePosition(null);
    setTargetPosition(null);
  }
  
  setSortedIndices(prev => [...prev, n - 1]);
  setActiveRange({ start: null, end: null });
};

/**
 * Insertion Sort Algorithm with Animation
 * Time Complexity: O(n²) | Space Complexity: O(1)
 */
const insertionSort = async (arr, setArray, setComparingIndices, setSortedIndices, setCurrentStep, setCurrentElement, setTargetPosition, setSourcePosition, setPivotIndex, setActiveRange, speed, isPaused) => {
  const n = arr.length;
  setSortedIndices([0]); // First element is considered sorted
  
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    
    setActiveRange({ start: 0, end: i });
    setCurrentElement(key);
    setSourcePosition(i);
    setCurrentStep(`Pass ${i}: Inserting element ${key} from position ${i} into sorted portion [0, ${i - 1}]`);
    await sleep(speed);
    
    while (j >= 0 && arr[j] > key) {
      while (isPaused()) {
        await sleep(100);
      }
      
      setComparingIndices([j, j + 1]);
      setTargetPosition(j + 1);
      setCurrentStep(`${arr[j]} > ${key}, shifting ${arr[j]} from position ${j} to position ${j + 1}`);
      
      arr[j + 1] = arr[j];
      setArray([...arr]);
      await sleep(speed);
      j--;
    }
    
    setTargetPosition(j + 1);
    setCurrentStep(`Found correct position: inserting ${key} at position ${j + 1}`);
    arr[j + 1] = key;
    setArray([...arr]);
    setSortedIndices(prev => [...prev, i]);
    setComparingIndices([]);
    setSourcePosition(null);
    setTargetPosition(null);
    await sleep(speed);
  }
  
  setActiveRange({ start: null, end: null });
};

/**
 * Merge Sort Algorithm with Animation
 * Time Complexity: O(n log n) | Space Complexity: O(n)
 */
const mergeSort = async (arr, setArray, setComparingIndices, setSortedIndices, setCurrentStep, setCurrentElement, setTargetPosition, setSourcePosition, setPivotIndex, setActiveRange, speed, isPaused) => {
  
  const merge = async (left, mid, right) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    setActiveRange({ start: left, end: right });
    setCurrentStep(`Merging subarrays [${left}, ${mid}] and [${mid + 1}, ${right}]`);
    await sleep(speed);
    
    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
      while (isPaused()) {
        await sleep(100);
      }
      
      setComparingIndices([left + i, mid + 1 + j]);
      setSourcePosition(left + i);
      setTargetPosition(k);
      setCurrentStep(`Comparing ${leftArr[i]} (left array) with ${rightArr[j]} (right array) for position ${k}`);
      await sleep(speed);
      
      if (leftArr[i] <= rightArr[j]) {
        setCurrentStep(`${leftArr[i]} ≤ ${rightArr[j]}, placing ${leftArr[i]} at position ${k}`);
        arr[k] = leftArr[i];
        i++;
      } else {
        setCurrentStep(`${leftArr[i]} > ${rightArr[j]}, placing ${rightArr[j]} at position ${k}`);
        arr[k] = rightArr[j];
        j++;
      }
      k++;
      setArray([...arr]);
      await sleep(speed);
    }
    
    while (i < leftArr.length) {
      setCurrentStep(`Copying remaining element ${leftArr[i]} from left array to position ${k}`);
      arr[k] = leftArr[i];
      i++;
      k++;
      setArray([...arr]);
      await sleep(speed);
    }
    
    while (j < rightArr.length) {
      setCurrentStep(`Copying remaining element ${rightArr[j]} from right array to position ${k}`);
      arr[k] = rightArr[j];
      j++;
      k++;
      setArray([...arr]);
      await sleep(speed);
    }
    
    setComparingIndices([]);
    setSourcePosition(null);
    setTargetPosition(null);
  };
  
  const mergeSortHelper = async (left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      
      await mergeSortHelper(left, mid);
      await mergeSortHelper(mid + 1, right);
      await merge(left, mid, right);
      
      // Mark sorted section
      for (let i = left; i <= right; i++) {
        setSortedIndices(prev => [...new Set([...prev, i])]);
      }
    }
  };
  
  await mergeSortHelper(0, arr.length - 1);
};

/**
 * Quick Sort Algorithm with Animation
 * Time Complexity: O(n log n) average, O(n²) worst | Space Complexity: O(log n)
 */
const quickSort = async (arr, setArray, setComparingIndices, setSortedIndices, setCurrentStep, setCurrentElement, setTargetPosition, setSourcePosition, setPivotIndex, setActiveRange, speed, isPaused) => {
  
  const partition = async (low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    
    setActiveRange({ start: low, end: high });
    setPivotIndex(high);
    setCurrentStep(`Partitioning range [${low}, ${high}] with pivot ${pivot} at position ${high}`);
    await sleep(speed);
    
    for (let j = low; j < high; j++) {
      while (isPaused()) {
        await sleep(100);
      }
      
      setComparingIndices([j, high]);
      setSourcePosition(j);
      setCurrentStep(`Comparing ${arr[j]} at position ${j} with pivot ${pivot}`);
      await sleep(speed);
      
      if (arr[j] < pivot) {
        i++;
        setTargetPosition(i);
        setCurrentStep(`${arr[j]} < ${pivot}, moving ${arr[j]} from position ${j} to position ${i} (left partition)`);
        swap(arr, i, j);
        setArray([...arr]);
        await sleep(speed);
      } else {
        setCurrentStep(`${arr[j]} ≥ ${pivot}, keeping ${arr[j]} in right partition`);
        await sleep(speed);
      }
    }
    
    setCurrentStep(`Placing pivot ${pivot} in its final position ${i + 1}`);
    setTargetPosition(i + 1);
    swap(arr, i + 1, high);
    setArray([...arr]);
    setSortedIndices(prev => [...prev, i + 1]);
    setPivotIndex(null);
    setComparingIndices([]);
    setSourcePosition(null);
    setTargetPosition(null);
    await sleep(speed);
    
    return i + 1;
  };
  
  const quickSortHelper = async (low, high) => {
    if (low < high) {
      const pi = await partition(low, high);
      
      await quickSortHelper(low, pi - 1);
      await quickSortHelper(pi + 1, high);
    } else if (low === high) {
      setSortedIndices(prev => [...prev, low]);
    }
  };
  
  await quickSortHelper(0, arr.length - 1);
  setActiveRange({ start: null, end: null });
};

export const sortingAlgorithms = {
  bubble: bubbleSort,
  selection: selectionSort,
  insertion: insertionSort,
  merge: mergeSort,
  quick: quickSort
};