/*
We have our lists of orders sorted numerically already, in arrays.
Write a function to merge our arrays of orders into one sorted array.

For example:

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

var mergeArrays = function(nums1, nums2) {
  var length = nums1.length + nums2.length;
  result = [];

  for (var i = 0; i < length; i++) {
    if (nums1.length === 0 || nums1[0] >= nums2[0]) {
      result.push(nums2.shift());
    } else {
      result.push(nums1.shift());
    }
  }

  return result;
}

var array1 = [3, 4, 6, 10, 11, 15];
var array2 = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(array1, array2)); // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]