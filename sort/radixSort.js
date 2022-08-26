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