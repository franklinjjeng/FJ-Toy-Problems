/*
Given an array of integers, find the largest consecutive sum
*/


var largestConsecutiveSum = function(num) {
  var max = 0;
  var current = 0;

  for (var i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
      current += num[i];
    } else {

      var negCheck = 0;
      for (var j = i; j < num.length; j++) {
        negCheck += num[j];
      }

      if (current + negCheck > max) {
        max = current + negCheck;
      }

      current = 0;
    }

    if (current > max) {
      max = current;
    }

  }


  return max;
}



console.log(largestConsecutiveSum([1, 2, 3])); // 6
console.log(largestConsecutiveSum([1, 2, -6, 5])); //5
console.log(largestConsecutiveSum([-3, -4, 6, -1, -1, 2, -1, 1, 5])); // 11