# Sortify

An interactive React.js application that visualizes popular sorting algorithms with real-time animations, algorithm information, and user controls.

## Features

### 🎯 Core Functionality
- **Interactive Visualization**: Watch sorting algorithms work in real-time with animated bars
- **Multiple Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort
- **Customizable Array**: Adjust array size (10-100 elements) and generate new random arrays
- **Animation Controls**: Adjustable speed (Slow/Medium/Fast), pause/resume, and stop functionality

### 🎨 Visual Features
- **Color-coded Animation**: 
  - Blue bars for unsorted elements
  - Red bars for elements being compared
  - Green bars for sorted elements
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean UI**: Modern gradient background with glassmorphism effects

### 📊 Educational Content
- **Algorithm Information Panel**: 
  - Time complexity (Best, Average, Worst case)
  - Space complexity
  - Algorithm properties (Stable, In-place)
  - Step-by-step explanation of how each algorithm works
- **Real-time Step Tracking**: See exactly what the algorithm is doing at each step

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## How to Use

### Basic Controls
1. **Array Size**: Use the slider to adjust array size (10-100 elements)
2. **Generate New Array**: Click to create a new random array
3. **Select Algorithm**: Choose from 5 different sorting algorithms
4. **Animation Speed**: Select Slow, Medium, or Fast animation speed
5. **Start Sorting**: Begin the visualization
6. **Pause/Resume**: Control the animation during sorting
7. **Stop**: Halt sorting and generate a new array

### Understanding the Visualization
- **Blue Bars**: Unsorted elements
- **Red Bars**: Elements currently being compared
- **Green Bars**: Elements that are in their final sorted position
- **Bar Height**: Represents the value of each element
- **Bar Values**: Displayed on bars when array size is small enough

## Algorithms Included

### 1. Bubble Sort
- **Time Complexity**: O(n²) average and worst case, O(n) best case
- **Space Complexity**: O(1)
- **Properties**: Stable, In-place
- **Description**: Repeatedly compares adjacent elements and swaps them if they're in wrong order

### 2. Selection Sort
- **Time Complexity**: O(n²) for all cases
- **Space Complexity**: O(1)
- **Properties**: Not stable, In-place
- **Description**: Finds minimum element and places it at the beginning, repeats for remaining array

### 3. Insertion Sort
- **Time Complexity**: O(n²) average and worst case, O(n) best case
- **Space Complexity**: O(1)
- **Properties**: Stable, In-place
- **Description**: Builds sorted array one element at a time by inserting each element in correct position

### 4. Merge Sort
- **Time Complexity**: O(n log n) for all cases
- **Space Complexity**: O(n)
- **Properties**: Stable, Not in-place
- **Description**: Divides array into halves, sorts them separately, then merges sorted halves

### 5. Quick Sort
- **Time Complexity**: O(n log n) average case, O(n²) worst case
- **Space Complexity**: O(log n)
- **Properties**: Not stable, In-place
- **Description**: Selects pivot element and partitions array around it, recursively sorts sub-arrays

## Project Structure

```
src/
├── components/
│   ├── SortingVisualizer.js    # Main visualization component
│   ├── SortingVisualizer.css   # Visualization styles
│   ├── Controls.js             # User control interface
│   ├── Controls.css            # Control styles
│   ├── AlgorithmInfo.js        # Algorithm information panel
│   └── AlgorithmInfo.css       # Information panel styles
├── algorithms/
│   └── sortingAlgorithms.js    # All sorting algorithm implementations
├── utils/
│   └── arrayUtils.js           # Utility functions for array operations
├── App.js                      # Main application component
├── App.css                     # Main application styles
├── index.js                    # React entry point
└── index.css                   # Global styles
```

## Technical Details

### Performance Optimizations
- Efficient rendering with React hooks (useState, useEffect, useCallback)
- Optimized for arrays up to 100 elements
- Smooth animations with CSS transitions
- Responsive design for various screen sizes

### Code Quality
- **Clean Architecture**: Separation of concerns with dedicated components
- **Well-commented Code**: Beginner-friendly with detailed comments
- **Modular Design**: Reusable components and utility functions
- **Error Handling**: Graceful handling of edge cases

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing
Feel free to fork this project and submit pull requests for improvements or additional features.

## License
This project is open source and available under the MIT License.