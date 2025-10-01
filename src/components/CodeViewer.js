import React, { useState } from 'react';
import './CodeViewer.css';

/**
 * CodeViewer Component
 * Displays algorithm implementations in multiple programming languages
 */
const CodeViewer = ({ algorithm }) => {
  console.log('CodeViewer rendering with algorithm:', algorithm);
  const [selectedLanguage, setSelectedLanguage] = useState('cpp');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = (language) => {
    if (language === selectedLanguage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedLanguage(language);
      setIsTransitioning(false);
    }, 150);
  };

  // Algorithm implementations in different languages
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
}`
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
}`
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
}`
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
}`
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
}`
    }
  };

  const languages = [
    { key: 'cpp', name: 'C++', icon: '🔷' },
    { key: 'python', name: 'Python', icon: '🐍' },
    { key: 'java', name: 'Java', icon: '☕' },
    { key: 'go', name: 'Go', icon: '🐹' }
  ];

  const copyToClipboard = () => {
    const code = algorithmCodes[algorithm][selectedLanguage];
    navigator.clipboard.writeText(code).then(() => {
      // Simple feedback - you could enhance this with a toast
      const btn = document.querySelector('.copy-btn');
      const originalText = btn.textContent;
      btn.textContent = '✅ Copied!';
      btn.style.background = 'rgba(34, 197, 94, 0.2)';
      btn.style.borderColor = '#22c55e';
      btn.style.color = '#22c55e';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'rgba(96, 165, 250, 0.2)';
        btn.style.borderColor = '#60a5fa';
        btn.style.color = '#60a5fa';
      }, 2000);
    }).catch(() => {
      console.log('Failed to copy code');
    });
  };

  // Simple syntax highlighting for better visual appeal
  const highlightSyntax = (code, language) => {
    let highlighted = code;
    
    // Common keywords for all languages
    const keywords = {
      cpp: ['#include', 'using', 'namespace', 'void', 'int', 'for', 'if', 'while', 'return', 'vector', 'swap', 'bool', 'true', 'false'],
      python: ['def', 'for', 'if', 'while', 'return', 'len', 'range', 'True', 'False', 'not'],
      java: ['public', 'class', 'static', 'void', 'int', 'for', 'if', 'while', 'return', 'boolean', 'true', 'false', 'new'],
      go: ['package', 'func', 'for', 'if', 'while', 'return', 'len', 'make', 'append', 'int', 'true', 'false']
    };
    
    // Apply basic highlighting
    if (keywords[language]) {
      keywords[language].forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlighted = highlighted.replace(regex, `<span class="keyword">${keyword}</span>`);
      });
    }
    
    // Highlight comments
    if (language === 'cpp' || language === 'java' || language === 'go') {
      highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>');
    } else if (language === 'python') {
      highlighted = highlighted.replace(/(#.*$)/gm, '<span class="comment">$1</span>');
    }
    
    // Highlight strings
    highlighted = highlighted.replace(/(".*?")/g, '<span class="string">$1</span>');
    highlighted = highlighted.replace(/('.*?')/g, '<span class="string">$1</span>');
    
    // Highlight numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    
    return highlighted;
  };

  // Debug: Check if algorithm exists in our data
  if (!algorithmCodes[algorithm]) {
    return (
      <div style={{ background: 'orange', padding: '20px', color: 'black' }}>
        <h3>ERROR: Algorithm "{algorithm}" not found in code database</h3>
        <p>Available algorithms: {Object.keys(algorithmCodes).join(', ')}</p>
      </div>
    );
  }

  return (
    <div className="code-viewer">
      <div className="code-header">
        <h3>Implementation Code</h3>
        <button onClick={copyToClipboard} className="copy-btn" title="Copy to clipboard">
          📋 Copy
        </button>
      </div>
      
      <div className="language-selector">
        {languages.map(lang => (
          <button
            key={lang.key}
            className={`lang-btn ${selectedLanguage === lang.key ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.key)}
          >
            <span className="lang-icon">{lang.icon}</span>
            <span className="lang-name">{lang.name}</span>
          </button>
        ))}
      </div>
      
      <div className={`code-container ${isTransitioning ? 'transitioning' : ''}`}>
        <pre className="code-block">
          <code 
            className={`language-${selectedLanguage}`}
            dangerouslySetInnerHTML={{
              __html: highlightSyntax(algorithmCodes[algorithm][selectedLanguage], selectedLanguage)
            }}
          />
        </pre>
      </div>
      
      <div className="code-footer">
        <div className="code-info">
          <span className="info-item">
            <strong>Language:</strong> {languages.find(l => l.key === selectedLanguage)?.name}
          </span>
          <span className="info-item">
            <strong>Algorithm:</strong> {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort
          </span>
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;