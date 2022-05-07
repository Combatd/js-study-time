/*
Similar to bubbleSort, but we should place the smaller values into a sorted position
rather than placing the larger values in the sorted position

We would take the element and compare it to the next element in the array
until a smaller number is found
*/

/*
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
            temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
            // only swap when other element is lower
            if(i !== lowest) {
                temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
            temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));