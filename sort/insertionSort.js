/*
* Gradually create a larger left half that is always sorted
* Compare to successive previous elements until a larger element is found, then swap
* Continue on to the next element and repeat the process again and again
* Eventually, the array is sorted
*/

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            if(arr[j] > currentVal) {
                arr[j + 1] = arr[j] // insertion
            }
            arr[j + 1] = currentVal; // have to track next currentVal before we compare again
        }
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));