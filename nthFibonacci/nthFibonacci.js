/*
Write a function fib() that a takes an integer n and returns the nnth fibonacci number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:

fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3
*/ 

var fib = function(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  var prevPrev = 0
  var prev = 1;

  for (var i = 1; i < n; i++) {
    var result = prevPrev + prev;
    prevPrev = prev;
    prev = result;
  }

  return result;
}

console.log(fib(0)); // => 0
console.log(fib(1)); // => 1
console.log(fib(2)); // => 1
console.log(fib(3)); // => 2
console.log(fib(4)); // => 3
console.log(fib(5)); // => 5

// 0 1 1 2 3 5