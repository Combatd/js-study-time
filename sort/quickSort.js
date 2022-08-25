// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// Works by selected one element (the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
// For simplicity, we will choose the first element as the pivot


function pivot(arr, start = 0, end = arr.length - 1) {
    var pivot = arr[start];
    var swapIndex = start; // keep track of what we are swapping the first element with at the very end

    for (let i = start + 1; i <= end; i++) {
        // compare our pivot
        if (pivot > arr[i]) {
            swapIndex += 1;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]); // => 3

function quickSort(arr, left = 0, right = arr.length - 1) {    
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));