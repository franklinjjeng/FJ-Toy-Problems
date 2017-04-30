/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

var highestProductFromThree = function(array) {
  // // O(nlogn) time
  // array.sort();
  // var length = array.length - 1;
  // if (array[0] < 0 && array[1] < 0) return array[0] * array[1] * array[length];
  // return array[length] * array[length - 1] * array[length - 2];

  // O(n) time and O(1) space
  var highest = [];
  var negative = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0 && negative.length < 2) {
      negative.push(array[i]);
      negative.sort((a, b) => a - b);
    } else if (array[i] < 0 && array[i] < negative[1]) {
      negative[1] = array[i];
      negative.sort((a, b) => a - b);
    } else if (highest.length < 3) {
      highest.push(array[i]);
      highest.sort((a, b) => a - b);
    } else if (array[i] > highest[0]) {
      highest[0] = array[i];
      highest.sort((a, b) => a - b);
    }
  }
  
  if (negative[0] * negative[1] > highest[0] * highest[1]) {
    return negative[0] * negative[1] * highest[2];
  }
  return highest[0] * highest[1] * highest[2];
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