/*
Given an array of numbers, move the 0's to the right side of the array
*/

var moveZeros = function(nums) {
  var results = [];
  var count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      results.push(nums[i]);
    } else {
      count++;
    }
  }

  for (var i = 0; i < count; i++) {
    results.push(0);
  }

  return results;
}


var nums = [1, 2, 0, 3, 0, 4]; 
console.log(moveZeros(nums)); // [1, 2, 3, 4, 0, 0];

nums = [1, 2, 3, 4]; 
console.log(moveZeros(nums)); // [1, 2, 3, 4];

nums = [0, 0, 0]; 
console.log(moveZeros(nums)); // [0, 0, 0];

nums = [0, 1, 2, 0, 3, 0, 4, 0]; 
console.log(moveZeros(nums)); // [1, 2, 3, 4, 0, 0, 0, 0];