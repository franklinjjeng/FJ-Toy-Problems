/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

var highestProductFromThree = function(array) {
  array.sort((a, b) => a - b);

  var largest = array[array.length - 1];
  var secondLargest = array[array.length - 3] * array[array.length - 2];
  
  if (array[0] < 0 && array[1] < 0) {
    var twoNegs = array[0] * array[1];
  }


  if (twoNegs) {
    return twoNegs > secondLargest ? twoNegs * largest : secondLargest * largest;
  }

  return secondLargest * largest;
}


var assert = function(actual, expected, message) {
  return actual === expected ? actual : message;
}

console.log(assert(highestProductFromThree([1, 2, 3]), 6, 'should return highest product from three ints'));
console.log(assert(highestProductFromThree([1, 2, 3, 4]), 24, 'should return highest product from three ints'));
console.log(assert(highestProductFromThree([4, 3, 2, 1]), 24, 'should return highest product from three ints'));
console.log(assert(highestProductFromThree([4, 3, 2, 5]), 60, 'should return highest product from three ints'));
console.log(assert(highestProductFromThree([-10, -10, 1, 3, 2]), 300, 'should return highest product from three ints'));
console.log(assert(highestProductFromThree([-10, -2, -10, 1, 3, 2]), 300, 'should return highest product from three ints'));