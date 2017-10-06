/*
Write a function fib() that a takes an integer n and returns the nnth fibonacci number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:

fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3
*/ 

var fib = function(n, prev, current) {
  if (n === 0 || n === 1) {
    return n;
  }

  prev = prev || 1;
  current = current || 1;

  return n === 2 ? current : fib(n - 1, current, current + prev)
}

console.log(fib(0)); // => 0
console.log(fib(1)); // => 1
console.log(fib(2)); // => 1
console.log(fib(3)); // => 2
console.log(fib(4)); // => 3
console.log(fib(5)); // => 5

// 0 1 1 2 3 5