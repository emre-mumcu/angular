```cs
// C# implementation of iterative Binary Search
using System;

class SearchAlgs {
    
    // Returns index of x if it is present in arr[]
    static int binarySearch(int[] arr, int x)
    {
        int low = 0, high = arr.Length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;

            // Check if x is present at mid
            if (arr[mid] == x) return mid;

            // If x greater, ignore left half
            if (arr[mid] < x) low = mid + 1;

            // If x is smaller, ignore right half
            else high = mid - 1;
        }

        // If we reach here, then element was not present
        return -1;
    }    
}
```