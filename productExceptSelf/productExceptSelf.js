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

// function getProductsOfAllIntsExceptAtIndex(nums) {
//   var ascendingProd = nums.slice();
//   var descendingProd = nums.slice();
//   var length = nums.length;
//   for (var i = 1; i < length; i++) {
//     ascendingProd[i] = nums[i] * ascendingProd[i - 1];
//     descendingProd[length - 1 - i] = nums[length - 1 - i] * descendingProd[length - i];
//   }
//   for (i = 0; i < length; i++) {
//     if (i === 0) nums[i] = descendingProd[1]
//     else if (i === length - 1) nums[length - 1] = ascendingProd[length - 2];
//     else nums[i] = ascendingProd[i - 1] * descendingProd[i + 1];
//   }
//   return nums;
// }

function getProductsOfAllIntsExceptAtIndex(intArray) {
    
    var productsOfAllIntsExceptAtIndex = [];

    var productSoFar = 1;
    for (var i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    productSoFar = 1;
    for (var j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }
    return productsOfAllIntsExceptAtIndex;
}

function assert(expected, actual, message){
  return expected === actual ? actual : message;
}

function compareArray(arr1, arr2) {
  if (arr1.join('') !== arr2.join('')) return false;
    return arr1.length === arr2.length;
}

console.log(assert(compareArray(getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4]), [24, 12, 8, 6]), true, 'should return multiplaction of all'));
console.log(assert(compareArray(getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]), true, 'should return multiplaction of all'));
console.log(assert(compareArray(getProductsOfAllIntsExceptAtIndex([2, 2, 3, 4]), [24, 24, 16, 12]), true, 'should return multiplaction of all'));