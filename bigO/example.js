/*
Suppose we want to write a function that calculates the sumo of 1 to n inclusive
*/

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(100));

const sumUpTo = (n) => {
    return n * (n + 1) / 2;
}

console.log(sumUpTo(6));
console.log(sumUpTo(100));

/*
But what is better?

faster?
Less memory usage?
Readability?
*/