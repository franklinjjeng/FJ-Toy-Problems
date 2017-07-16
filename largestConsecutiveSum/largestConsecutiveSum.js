/*
Given an array of integers, find the largest consecutive sum
*/


var largestConsecutiveSum = function(num) {
  var max = 0;
  var check = 0;

  for (var i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      var negCheck = num[i];
      for (var j = i + 1; j < num.length; j++) {
        negCheck += num[j];
      }

      if (negCheck + check > max) {
        max = check + negCheck;
      }
      
      check = 0;

    } else {
      check += num[i];
    }

    if (check > max) {
      max = check;
    }
  }

  return max;
}



console.log(largestConsecutiveSum([1, 2, 3])); // 6
console.log(largestConsecutiveSum([1, 2, -6, 5])); //5
console.log(largestConsecutiveSum([-3, -4, 6, -1, -1, 2, -1, 1, 5])); // 11