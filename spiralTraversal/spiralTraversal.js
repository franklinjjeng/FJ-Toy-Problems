/*
Traverse through a matrix (2D Array) in a spiral and output the values in that order.

Example:
input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

output: [1, 2, 3, 6, 9, 8, 7, 4, 5];

*/


var spiralTraversal = function(matrix) {
  var counter = length = matrix.length;
  var start = 0;
  var result = [];

  while (counter > 0) {
    // for loop to traverse right top
    for (var i = 0; i < counter; i++) {
      result.push(matrix[start][start + i]);
    }
    counter--;

    // for loop to traverse down right
    for (var i = 0; i < counter; i++) {
      result.push(matrix[start + 1 + i][length - 1 - start]);
    }

    // for loop to traverse left bottom
    for (var i = 0; i < counter; i++) {
      result.push(matrix[length - 1 - start][length - 2 - i]);
    }
    counter--;

    // for loop to traverse up left
    for (var i = 0; i < counter; i++) {
      result.push(matrix[length - 2 - i][start]);
    }

    start++;
  }

  return result;
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralTraversal(matrix));

matrix = [
  [1, 2],
  [3, 4]
];
console.log(spiralTraversal(matrix));

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
console.log(spiralTraversal(matrix));

matrix = [[1]];

console.log(spiralTraversal(matrix));


matrix = [
  [ 1, 2, 3, 4, 5],
  [ 6, 7, 8, 9, 10],
  [ 11, 12, 13, 14, 15],
  [ 16, 17, 18, 19, 20],
  [ 21, 22, 23, 24, 25],
];

console.log(spiralTraversal(matrix));