/*
Given an array, find the minimum absolute difference between two integers in the array

Example: [1, 3, 0];
Output: 1

|1 - 3| = 2
|1 - 0| = 1
|3 - 0| = 3
*/

var minAbsDiff = function(array) {
  var minDiff;

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      var diff = Math.abs(array[i] - array[j])
      if (minDiff === undefined || minDiff > diff) {
        minDiff = diff;
      }
    }
  }

  return minDiff;
}

var assert = function(actual, expected, message) {
  return actual === expected ? actual : message;
}

console.log(assert(minAbsDiff([1, 3, 0]), 1, 'should return the absolute minimum difference'));
console.log(assert(minAbsDiff([1, 3, -2]), 2, 'should return the absolute minimum difference'));
