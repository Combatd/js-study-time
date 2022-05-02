function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    let midPoint = Math.floor((low + high) / 2);

    while(arr[midPoint] !== value && low <= high) {
        if (arr[midPoint] === value) {
            return midPoint;
        } else if(value < arr[midPoint]) {
            high = midPoint - 1
        } else {
            low = midPoint + 1;
        }
        midPoint = Math.floor((low + high) / 2);
    }
    if (arr[midPoint] === value) {
        return midPoint;
    }

    return -1;
}

const arr1 = [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19];
const arr2 = [5,6,10,13,14,15,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99];

console.log(binarySearch(arr1, 15));
console.log(binarySearch(arr2, 10));