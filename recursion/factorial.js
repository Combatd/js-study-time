const factorial = (num) => {
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= 1;
    }
    return total;
}

function factorialRecursive(num) {
    if (num < 1) return num;
    return num * factorialRecursive(num - 1);
}