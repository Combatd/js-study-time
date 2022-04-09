function getUniqueValues(arr) {
    const uniqArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(uniqArr[uniqArr.length - 1] != arr[i]) { // if we don't have the value in the uniqArr already
            uniqArr.push(arr[i]);
        }
    }
    return uniqArr;
}

function countUniqueValues(arr) {
    const uniqArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(uniqArr[uniqArr.length - 1] != arr[i]) { // if we don't have the value in the uniqArr already
            uniqArr.push(arr[i]);
        }
    }
    return uniqArr.length;
}

function countUniqueValuesBetter(arr) {
    if(arr.length === 0) { return 0; }
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}