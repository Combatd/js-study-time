const sumRange = (num) => {
    if(num === 1) return 1; // base case
    return num + sumRange(num - 1); // recursive call, subtracting by 1 until it hits the base case
}