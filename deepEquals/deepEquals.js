/*
Create a function that can compare objects and arrays.
If they are the same, return true, else false;
*/

var deepEquals = function(obj1, obj2) {
  
};

var assert = function(actual, expected, message) {
  return actual === expected ? actual : message;
}


var a1 = {
  key1: 'val1'
}

console.log(assert(deepEquals(a1, a1), true, 'should compare objects properly'));

var b1 = {
  key1: 'val1',
  key2: 'val2'
}

var b2 = {
  key2: 'val2',
  key1: 'val1'
}

console.log(assert(deepEquals(a1, b1), false, 'should compare objects properly'));
console.log(assert(deepEquals(b1, b2), true, 'should compare objects properly regardless of order'));

var c1 = {
  key1: {a: 1, b: 2},
  key2: 3
}

var c2 = {
  key2: 3,
  key1: {a: 1, b: 2},
}

console.log(assert(deepEquals(c1, c2), true, 'should compare nested objects properly'));


var objArray1 = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
]

var objArray2 = [
  {startTime: 0, asdf: 2},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
]


var array1 = [1, 2, 3];
var array2 = [2, 3];

console.log(assert(deepEquals(objArray1, objArray1), true, 'should compare nested objects properly'));
console.log(assert(deepEquals(objArray1, objArray2), false, 'should compare nested objects properly'));
console.log(assert(deepEquals(array1, array2), false, 'should compare nested objects properly'));
