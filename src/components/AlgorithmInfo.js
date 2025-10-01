import React from "react";
import "./AlgorithmInfo.css";
import SimpleCodeViewer from "./SimpleCodeViewer";

/**
 * AlgorithmInfo Component
 * Displays information about the selected sorting algorithm
 */
const AlgorithmInfo = ({
  algorithm,
  currentStep,
  isAnimating,
  currentElement,
  targetPosition,
  sourcePosition,
  pivotIndex,
  activeRange,
  array,
}) => {
  // Algorithm information database
  const algorithmData = {
    bubble: {
      name: "Bubble Sort",
      description:
        "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
      },
      spaceComplexity: "O(1)",
      stable: true,
      inPlace: true,
      howItWorks: [
        "Compare adjacent elements in the array",
        "Swap them if they are in wrong order",
        "Continue until no more swaps are needed",
        'Largest elements "bubble up" to the end',
      ],
    },
    selection: {
      name: "Selection Sort",
      description:
        "Finds the minimum element and places it at the beginning, then repeats for the remaining unsorted portion.",
      timeComplexity: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
      },
      spaceComplexity: "O(1)",
      stable: false,
      inPlace: true,
      howItWorks: [
        "Find the minimum element in unsorted array",
        "Swap it with the first element",
        "Move boundary of sorted/unsorted arrays",
        "Repeat until entire array is sorted",
      ],
    },
    insertion: {
      name: "Insertion Sort",
      description:
        "Builds the final sorted array one item at a time by inserting each element into its correct position.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
      },
      spaceComplexity: "O(1)",
      stable: true,
      inPlace: true,
      howItWorks: [
        "Start with second element (first is considered sorted)",
        "Compare with elements in sorted portion",
        "Shift larger elements to the right",
        "Insert current element in correct position",
      ],
    },
    merge: {
      name: "Merge Sort",
      description:
        "Divides the array into halves, sorts them separately, then merges the sorted halves back together.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
      spaceComplexity: "O(n)",
      stable: true,
      inPlace: false,
      howItWorks: [
        "Divide array into two halves recursively",
        "Sort each half independently",
        "Merge the sorted halves back together",
        "Continue until entire array is sorted",
      ],
    },
    quick: {
      name: "Quick Sort",
      description:
        "Selects a pivot element and partitions the array around it, then recursively sorts the sub-arrays.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)",
      },
      spaceComplexity: "O(log n)",
      stable: false,
      inPlace: true,
      howItWorks: [
        "Choose a pivot element from the array",
        "Partition array so smaller elements are left of pivot",
        "Larger elements are placed right of pivot",
        "Recursively apply to sub-arrays",
      ],
    },
  };

  const info = algorithmData[algorithm];

  const algorithmCodes = {
    bubble: {
      cpp: `// Bubble Sort in C++
#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}`,
      python: `# Bubble Sort in Python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`,
      java: `// Bubble Sort in Java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }
}`,
      go: `// Bubble Sort in Go
package main

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        swapped := false
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            }
        }
        if !swapped {
            break
        }
    }
}`,
    },
    selection: {
      cpp: `// Selection Sort in C++
#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            swap(arr[i], arr[minIdx]);
        }
    }
}`,
      python: `# Selection Sort in Python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
      java: `// Selection Sort in Java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx != i) {
                int temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
        }
    }
}`,
      go: `// Selection Sort in Go
package main

func selectionSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIdx := i
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIdx] {
                minIdx = j
            }
        }
        if minIdx != i {
            arr[i], arr[minIdx] = arr[minIdx], arr[i]
        }
    }
}`,
    },
    insertion: {
      cpp: `// Insertion Sort in C++
#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
      python: `# Insertion Sort in Python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`,
      java: `// Insertion Sort in Java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
}`,
      go: `// Insertion Sort in Go
package main

func insertionSort(arr []int) {
    n := len(arr)
    for i := 1; i < n; i++ {
        key := arr[i]
        j := i - 1
        for j >= 0 && arr[j] > key {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}`,
    },
    merge: {
      cpp: `// Merge Sort in C++
#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> leftArr(arr.begin() + left, arr.begin() + mid + 1);
    vector<int> rightArr(arr.begin() + mid + 1, arr.begin() + right + 1);
    
    int i = 0, j = 0, k = left;
    while (i < leftArr.size() && j < rightArr.size()) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }
    while (i < leftArr.size()) arr[k++] = leftArr[i++];
    while (j < rightArr.size()) arr[k++] = rightArr[j++];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`,
      python: `# Merge Sort in Python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
      java: `// Merge Sort in Java
public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        int[] leftArr = new int[mid - left + 1];
        int[] rightArr = new int[right - mid];
        
        System.arraycopy(arr, left, leftArr, 0, leftArr.length);
        System.arraycopy(arr, mid + 1, rightArr, 0, rightArr.length);
        
        int i = 0, j = 0, k = left;
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }
        while (i < leftArr.length) arr[k++] = leftArr[i++];
        while (j < rightArr.length) arr[k++] = rightArr[j++];
    }
}`,
      go: `// Merge Sort in Go
package main

func mergeSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }
    
    mid := len(arr) / 2
    left := mergeSort(arr[:mid])
    right := mergeSort(arr[mid:])
    
    return merge(left, right)
}

func merge(left, right []int) []int {
    result := make([]int, 0, len(left)+len(right))
    i, j := 0, 0
    
    for i < len(left) && j < len(right) {
        if left[i] <= right[j] {
            result = append(result, left[i])
            i++
        } else {
            result = append(result, right[j])
            j++
        }
    }
    
    result = append(result, left[i:]...)
    result = append(result, right[j:]...)
    return result
}`,
    },
    quick: {
      cpp: `// Quick Sort in C++
#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
      python: `# Quick Sort in Python
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
      java: `// Quick Sort in Java
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
}`,
      go: `// Quick Sort in Go
package main

func quickSort(arr []int, low, high int) {
    if low < high {
        pi := partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)
    }
}

func partition(arr []int, low, high int) int {
    pivot := arr[high]
    i := low - 1
    
    for j := low; j < high; j++ {
        if arr[j] < pivot {
            i++
            arr[i], arr[j] = arr[j], arr[i]
        }
    }
    
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1
}`,
    },
  };

  const languages = [
    { key: "cpp", name: "C++", icon: "🔷" },
    { key: "python", name: "Python", icon: "🐍" },
    { key: "java", name: "Java", icon: "☕" },
    { key: "go", name: "Go", icon: "🐹" },
  ];

  return (
    <div className="algorithm-info">
      <div className="info-header">
        <h2>{info.name}</h2>
        <p className="description">{info.description}</p>
      </div>

      <div className="complexity-section">
        <h3>Time Complexity</h3>
        <div className="complexity-grid">
          <div className="complexity-item">
            <span className="label">Best Case:</span>
            <span className="value best">{info.timeComplexity.best}</span>
          </div>
          <div className="complexity-item">
            <span className="label">Average Case:</span>
            <span className="value average">{info.timeComplexity.average}</span>
          </div>
          <div className="complexity-item">
            <span className="label">Worst Case:</span>
            <span className="value worst">{info.timeComplexity.worst}</span>
          </div>
        </div>
      </div>

      <div className="complexity-section">
        <h3>Space Complexity</h3>
        <div className="space-complexity">
          <span className="value">{info.spaceComplexity}</span>
        </div>
      </div>

      <div className="properties-section">
        <h3>Properties</h3>
        <div className="properties-grid">
          <div className="property">
            <span className="property-label">Stable:</span>
            <span className={`property-value ${info.stable ? "yes" : "no"}`}>
              {info.stable ? "Yes" : "No"}
            </span>
          </div>
          <div className="property">
            <span className="property-label">In-Place:</span>
            <span className={`property-value ${info.inPlace ? "yes" : "no"}`}>
              {info.inPlace ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>

      <div className="how-it-works-section">
        <h3>How It Works</h3>
        <ol className="steps-list">
          {info.howItWorks.map((step, index) => (
            <li key={index} className="step">
              {step}
            </li>
          ))}
        </ol>
      </div>

      {isAnimating && (
        <div className="current-step-section">
          <h3>Live Algorithm Analysis</h3>
          <div className="current-step">
            <div className="step-indicator"></div>
            <p>{currentStep}</p>
          </div>

          {/* Enhanced Dry Run Information */}
          <div className="dry-run-info">
            {currentElement !== null && (
              <div className="info-item">
                <span className="info-label">Current Element:</span>
                <span className="info-value element">{currentElement}</span>
              </div>
            )}

            {sourcePosition !== null && (
              <div className="info-item">
                <span className="info-label">Source Position:</span>
                <span className="info-value position">{sourcePosition}</span>
              </div>
            )}

            {targetPosition !== null && (
              <div className="info-item">
                <span className="info-label">Target Position:</span>
                <span className="info-value position">{targetPosition}</span>
              </div>
            )}

            {pivotIndex !== null && (
              <div className="info-item">
                <span className="info-label">Pivot Element:</span>
                <span className="info-value pivot">
                  {array[pivotIndex]} (at index {pivotIndex})
                </span>
              </div>
            )}

            {activeRange.start !== null && activeRange.end !== null && (
              <div className="info-item">
                <span className="info-label">Active Range:</span>
                <span className="info-value range">
                  [{activeRange.start}, {activeRange.end}]
                </span>
              </div>
            )}

            {sourcePosition !== null && targetPosition !== null && (
              <div className="movement-info">
                <div className="movement-arrow">
                  <span className="from">From: {sourcePosition}</span>
                  <span className="arrow">→</span>
                  <span className="to">To: {targetPosition}</span>
                </div>
                {currentElement !== null && (
                  <div className="movement-description">
                    Moving element <strong>{currentElement}</strong> from
                    position <strong>{sourcePosition}</strong> to position{" "}
                    <strong>{targetPosition}</strong>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* SIMPLE CODE VIEWER - GUARANTEED TO WORK */}
      <SimpleCodeViewer algorithm={algorithm} />
    </div>
  );
};

export default AlgorithmInfo;
