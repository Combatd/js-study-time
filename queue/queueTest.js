const q = [];

q.push('1st')
q.push('2nd')
q.push('3rd')

console.log(q);
q.shift(); // => 1st
q.shift(); // => 2nd
q.shift(); // => 3rd


q.unshift('1st');
q.unshift('2nd');
q.unshift('3rd');

q.pop() // => 1st
q.pop() // => 2nd
q.pop() // => 3rd