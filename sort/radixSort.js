/*
Radix sort
A special sorting algorithm that works on lists of numbers

It never makes comparisons between elements

It exploits the fact that information about the size of a number is encoded in the number of digits.

More digits means a bigger number
*/



/*
#geDigit(num, place)
returns the digit in num at the given place value
*/
function getDigit(num, place) {
    let numberDividedByHundredInteger = Math.floor(Math.abs(num) / Math.pow(10, place));
    return numberDividedByHundredInteger % 10; // base 10
}

console.log(getDigit(7323, 2)); // => 3
console.log(getDigit(7323, 12)); // => 0

/*
#digitCount(num) - return the number of digits in num
*/

function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(21368));

/*
#mostDigits(nums)
Given an array of numbers, 
returns the number of digits in the largest numbers in the list
*/

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        maxDigits = Math.max(maxDigits, digitCount(currentNumber));
    }
    return maxDigits;
}

console.log(mostDigits([23, 567, 89, 12234324, 90]));

/*
Define a function that accepts list of numbers
Figure out how many digits the largest number has
Loop from k = 0 up to this largest number of digits
For each iteration of the loop:
    Create buckets for each digit
    Place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets, starting with 0 and going up to 9
return list at the end
*/
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        const digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets); // spread operator allows ever element to be an individual argument to push in
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));