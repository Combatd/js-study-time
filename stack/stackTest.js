const stack = [];

stack.push("Google");
stack.push("Instagram");
stack.push("YouTube");

stack.pop(); // => YouTube
stack.pop(); // => Instagram

stack.push('Amazon');
stack.pop(); // => Amazon

stack.unshift("Google");
stack.unshift("Instagram");
stack.unshift("YouTube");

console.log(stack.shift()); // => YouTube