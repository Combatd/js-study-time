const arr = [5, 4, 3, 2, 1];
arr.push(0); // O(1)
arr.pop(); // O(1)
arr.shift() // O(n)
arr.unshift() // O(n)
arr.concat([6, 7]); // O(n)
arr.slice(0); // O(n);
arr.splice(-1); // O(n);
arr.sort(); // O(n * logn)
arr.forEach((ele) => console.log(ele)); // O(n)