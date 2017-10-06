/*
Shortest Sub-array Containing Maximum Degree
Given an array of numbers, the degrees is the number of times the same number shows up. For example: [1, 2, 2, 3] would have a max degree of two as 2 appears twice. Find the shortest length sub-array containing the maximum number of degrees.

example:
input: [2, 2, 3, 1, 3]
output: 2
explanation: The maximum number of degrees is two as 2 and 3 both appear twice.
The sub-arrays containing the maximum degrees are [2, 2] and [3, 1, 3].
The shortest sub-array length is found to be two.
*/

var maxDegreeSub = function(nums) {
  var degrees = {};
  var maxDegree = 0;

  for (var i = 0; i < nums.length; i++) {
    num = nums[i];
    if (degrees[num] === undefined) {
      degrees[num] = 0;
    }

    degrees[num]++;
    if (degrees[num] > maxDegree) {
      maxDegree = degrees[num];
    }
  }

  var min = nums.length;

  for (var key in degrees) {
    if (degrees[key] === maxDegree) {

      for (var i = 0; i < nums.length; i++) {
        if (nums[i] === +key) {
          break;
        }
      }


      for (var j = nums.length - 1; j >= 0; j--) {
        if (nums[j] === +key) {
          break;
        }
      }

      if (min > j - i + 1) {
        min = j - i + 1;
      }
    }
  }


  return min;
}


console.log(maxDegreeSub([2, 2])); // 2
console.log(maxDegreeSub([2, 2, 3, 1, 3])); // 2
console.log(maxDegreeSub([2, 2, 3, 1, 3, 2])); // 6







