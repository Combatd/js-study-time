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