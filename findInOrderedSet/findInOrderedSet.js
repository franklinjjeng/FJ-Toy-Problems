/*
Suppose we had an array of n integers sorted in ascending order.
How quickly could we check if a given integer is in the array?
*/

var findInOrderedSet = function(array, k) {
  var floor = 0;
  var ceil = array.length - 1;

  while (floor < ceil) {

    var check = Math.floor((floor + ceil) / 2);

    if (array[check] === k) {
      return true;
    } else if (array[check] > k) {
      ceil = check;
    } else if (array[check] < k) {
      floor = check;
    }

    if (floor + 1 >= ceil) {
      return array[ceil] === k || array[floor] === k;
    }

  }

  return array[0] === k;
}


console.log(findInOrderedSet([1, 2, 3, 4, 5], 4)); // true
console.log(findInOrderedSet([1, 2, 3, 4, 5], 6)); // false
console.log(findInOrderedSet([1, 2, 3, 4, 5], 5)); // true
console.log(findInOrderedSet([1, 2, 3, 4, 5], 1)); // true
console.log(findInOrderedSet([1, 2], 1)); // true;
console.log(findInOrderedSet([1, 2], 6)); // false
console.log(findInOrderedSet([0], 0)); // true

