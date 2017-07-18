/*
Suppose we had an array of n integers sorted in ascending order.
How quickly could we check if a given integer is in the array?
*/

var findInOrderedSet = function(array, k) {
  var floor = 0;
  var ceiling = array.length;

  if (array[0] === k) {
    return true;
  }

  while (floor < ceiling) {
    var check = Math.floor((floor + ceiling) / 2);
    if (array[check] === k) {
      return true;
    } else if (array[check] > k) {
      ceiling = check;
    } else if (array[check] < k) {
      floor = check;
    }

    if (floor + 1 === ceiling) {
      return false;
    }
  }

  return false;
}


console.log(findInOrderedSet([1, 2, 3, 4, 5], 4)); // true
console.log(findInOrderedSet([1, 2, 3, 4, 5], 6)); // false
console.log(findInOrderedSet([1, 2, 3, 4, 5], 5)); // true
console.log(findInOrderedSet([1, 2, 3, 4, 5], 1)); // true
console.log(findInOrderedSet([1, 2], 1)); // true;
console.log(findInOrderedSet([1, 2], 6)); // false
console.log(findInOrderedSet([0], 0)); // true

