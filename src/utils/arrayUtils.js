/**
 * Generates a random array of numbers for sorting visualization
 * @param {number} size - Size of the array (max 100)
 * @returns {Array} Array of random numbers between 5 and 500
 */
export const generateRandomArray = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    // Generate random numbers between 5 and 500 for better visualization
    array.push(Math.floor(Math.random() * 495) + 5);
  }
  return array;
};

/**
 * Creates a delay for animation purposes
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after the delay
 */
export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Swaps two elements in an array
 * @param {Array} arr - The array to modify
 * @param {number} i - First index
 * @param {number} j - Second index
 */
export const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};