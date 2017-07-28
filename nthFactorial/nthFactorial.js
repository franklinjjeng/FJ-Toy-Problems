/*
Create a function that finds the nth factorial.
*/

var nthFactorial = function(n, result) {
  result = result || 1;

  return n === 0 ? result : nthFactorial(n - 1, result * n);
}

console.log(nthFactorial(0)); // 1
console.log(nthFactorial(1)); // 1
console.log(nthFactorial(2)); // 2
console.log(nthFactorial(3)); // 6
console.log(nthFactorial(4)); // 24
console.log(nthFactorial(5)); // 120