function merge(arr1, arr2) {
    // Create an empty array, take a look at smallest values in each input array
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
    // If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in first array
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i += 1;
        } else {
            // If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
            results.push(arr2[j]);
            j += 1;
        }
    }
    // Once we exhaust one array, pussh in all remaining values from the other array
    while(i < arr1.length) {
        results.push(arr1[i]);
        i += 1;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j += 1;
    }
    return results;
}

console.log(merge([100, 200], [1, 2, 3, 5, 6]));