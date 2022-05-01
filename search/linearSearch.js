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
