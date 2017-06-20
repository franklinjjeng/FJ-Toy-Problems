/*
Given an array, find the minimum absolute difference between two integers in the array

Example: [1, 3, 0];
Output: 1

|1 - 3| = 2
|1 - 0| = 1
|3 - 0| = 3
*/

var minAbsDiff = function(array) {
  var sorted = array.sort((a, b) => b - a);
  var result = Math.abs(sorted[0] - sorted[1]);

  for (var i = 1; i < array.length - 1; i++) {
    var check = Math.abs(sorted[i] - sorted[i + 1]);
    if (result > check) {
      result = check;
    }
  }

  return result;
}

var assert = function(actual, expected, message) {
  return actual === expected ? actual : message;
}

console.log(assert(minAbsDiff([1, 3, 0]), 1, 'should return the absolute minimum difference'));
console.log(assert(minAbsDiff([1, 3, -2]), 2, 'should return the absolute minimum difference'));
