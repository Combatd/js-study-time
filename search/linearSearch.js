function linearSearch(arr, valueToFind) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === valueToFind) {
            return i;
        } else {
            i += 1;
        }
    }
    return -1;
}

console.log(linearSearch([0, 11, 65, 98, 42, 100], 40));
console.log(linearSearch([0, 11, 65, 98, 42, 100], 0));
console.log(linearSearch([0, 11, 65, 98, 42, 100], 65));
console.log(linearSearch([0, 11, 65, 98, 42, 100], 42));

/*
BIg O Linear Search

O(1) Best Case - We checked the 1st element of the array and it is there!
O(n) Worst case - We make it to the end of the array and it is finally found.
O(n) Average case - It could be halfway through the array... O(n/2) = O(n)
*/