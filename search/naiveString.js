function naiveStringSearch(longStr, shortStr) {
    let count = 0; // accumulator
    // loop over the long string
    for (let i = 0; i < longStr.length; i++) {
        // loop over the short string
        for (let j = 0; j < shortStr.length; j++) {
            // we have to kee[ comparing subsequent elements for a match]
            if(shortStr[j] !== longStr[i + j]) {
                break;
            }
            // if it didn't break the inner loop, the shortStr is a substring
            if(j === shortStr.length - 1) {
                count += 1;
            }
        }
    }
    return count;
}