/*
I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
Write a function for finding the number that appears twice.
*/

var appearsTwice = function(array) {
  var check = {};

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (!check[num]) {
      check[num] = true;
    } else {
      return num;
    }
  }
}

var array = [1, 2, 1, 4, 3];
console.log(appearsTwice(array));