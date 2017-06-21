/*
I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
Write a function for finding the number that appears twice.
*/

var appearsTwice = function(array) {

  // // O(n) space and time
  // var count = {};

  // for (var i = 0; i < array.length; i++) {
  //   if (count[array[i]] === undefined) count[array[i]] = 0;
  //   else return array[i];
  // }

  // O(nlogn) time O(1) space
  array.sort((a, b) => (b - a));

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) return array[i];
  }

  return 'no duplicate';
}

var array = [1, 2, 1, 4, 3];
console.log(appearsTwice(array));