/*
Given an unsorted array, if you are able to reverse one sub array to sort the array in ascending order, return true.

example: 
input: [1, 2, 5, 4, 3, 10]
output: true
as the sub array[5, 4, 3] can be reversed to become [1, 2, 3, 4, 5, 10]

input: [1, 2, 5, 3, 6, 4]
output: false
You cannot reverse one sub array to sort the array

*/

var reverseSubarraySort = function(array) {
  var startIndex, endIndex;

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      startIndex = i;
      break;
    }
  }

  for (var i = startIndex; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      endIndex = i;
      break;
    }
  }

  if (!endIndex) {
    endIndex = array.length - 1;
  }

  for (var i = 0; i < Math.floor((endIndex - startIndex + 1) / 2); i++) {
    var temp = array[startIndex + i];
    array[startIndex + i] = array[endIndex - i];
    array[endIndex - i] = temp;
  }


  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(reverseSubarraySort([1, 2, 5, 4, 3, 10])) // true;
console.log(reverseSubarraySort([1, 2, 5, 3, 6, 4])) // false;
console.log(reverseSubarraySort([5, 4, 3, 2])) // true;
console.log(reverseSubarraySort([1, 2, 3, 5, 4])) // true;
console.log(reverseSubarraySort([1, 3, 2])) // true;