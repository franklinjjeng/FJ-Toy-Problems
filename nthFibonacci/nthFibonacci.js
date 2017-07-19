/*
Write a function fib() that a takes an integer n and returns the nnth fibonacci number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:

fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3
*/ 

var fib = function(n, result, prev) {
  if (n === 0){
    return 0;
  }
  var temp = prev || 0
  prev = result || 0;
  result = result + temp || 1;

  return n === 1 ? result : fib(n - 1, result, prev);
}

console.log(fib(0)); // => 0
console.log(fib(1)); // => 1
console.log(fib(2)); // => 1
console.log(fib(3)); // => 2
console.log(fib(4)); // => 3
console.log(fib(5)); // => 5

// 0 1 1 2 3 5