/*
Given an array of numbers, move the 0's to the right side of the array
*/

var moveZeros = function(nums) {
  var startIndex = 0;
  var endIndex = nums.length - 1;

  while (startIndex < endIndex) {

    for (var i = startIndex; i < endIndex; i++) {
      if (nums[i] === 0) {
        break;
      }
      startIndex++;
    }

    for (var i = endIndex; i > startIndex; i--) {
      if (nums[i] !== 0) {
        break;
      }
      endIndex--;
    }

    if (startIndex < endIndex) {
      var temp = nums[startIndex];
      nums[startIndex] = nums[endIndex];
      nums[endIndex] = temp;
    }

  }

  return nums;
}


var nums = [1, 2, 0, 3, 0, 4]; 
console.log(moveZeros(nums)); // [1, 2, 3, 4, 0, 0];

nums = [1, 2, 3, 4]; 
console.log(moveZeros(nums)); // [1, 2, 3, 4];

nums = [0, 0, 0]; 
console.log(moveZeros(nums)); // [0, 0, 0];

nums = [0, 1, 2, 0, 3, 0, 4, 0]; 
console.log(moveZeros(nums)); // [1, 2, 3, 4, 0, 0, 0, 0];