function countUniqueValues(arr) {
    const uniqArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(uniqArr[uniqArr.length - 1] != arr[i]) { // if we don't have the value in the uniqArr already
            uniqArr.push(arr[i]);
        }
    }
    return uniqArr;
}