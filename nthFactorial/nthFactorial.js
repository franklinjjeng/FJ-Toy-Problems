/*
Create a function that finds the nth factorial.
*/

var nthFactorial = function(n) {
  if (n === 0) {
    return 1;
  }

  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(nthFactorial(0)); // 1
console.log(nthFactorial(1)); // 1
console.log(nthFactorial(2)); // 2
console.log(nthFactorial(3)); // 6
console.log(nthFactorial(4)); // 24
console.log(nthFactorial(5)); // 120