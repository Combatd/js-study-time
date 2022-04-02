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