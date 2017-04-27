/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:
  [1, 7, 3, 4]

your function would return:
  [84, 12, 28, 21]

by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
*/

function getProductsOfAllIntsExceptAtIndex(arr) {
  // TODO
}

function assert(expected, actual, message){
    return expected === actual ? actual : message;
}

function compareArray(arr1, arr2) {
  if (arr1.join('') !== arr2.join('')) return false;
    return arr1.length === arr2.length;
}

console.log(assert(compareArray(getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4]), [24, 12, 8, 6]), true, 'should return multiplaction of all'));





