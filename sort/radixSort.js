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