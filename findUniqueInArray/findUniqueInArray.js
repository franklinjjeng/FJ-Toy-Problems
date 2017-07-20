/*
Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.
*/

var findUnique = function(array) {
  var check = {};
  for (var i = 0; i < array.length; i++) {
    if (!check[array[i]]) {
      check[array[i]] = 0;
    }
    check[array[i]]++;
  }

  for (var key in check) {
    if (check[key] === 1) {
      return key;
    }
  }
}

console.log(findUnique([1, 2, 3, 4, 5, 1, 2, 3, 4])); // 5
console.log(findUnique([3, 2, 1, 4, 3, 1, 5, 5, 4])); // 2
console.log(findUnique([2, 1, 1])); // 2
