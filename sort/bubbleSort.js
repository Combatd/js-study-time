/*
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    } 
    return arr;
}
*/ 

/*
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    } 
    return arr;
}
*/

const bubbleSort = (arr) => {
    let noSwaps; // undefined
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break; // reduce our iterations by breaking out since it is already sorted
    } 
    return arr;
}

/* 
bubbleSort is generally n^2 in the Time worst case O(n^2)

in best case, bubbleSort could be O(n) if it is mostly sorted
*/