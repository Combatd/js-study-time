function sumZero(arr) {
    for(let i =0; i < arr.length; i++) {
        // i will grab the first number
        // j will grab on the numbers after it to form a pair
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

const sumZeroBetter = (arr) => {
    // lets pivot between two numbers, we "reduce" the index on each side of the array
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
            /*
                const sumPair = [];
                sumPair.push(arr[left]);
                sumPair.push(arr[right]);
            */
        }
        else if(sum > 0) {
            right--; // lets reduce the right side...
        } else {
            left--; // lets reduce the left side
        }
    }
}