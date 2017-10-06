/*
Given an array of stock prices, write a function that
finds and returns the best profit I could have made from
1 purchase and 1 sale of 1 Apple stock yesterday.

example:
input: [5, 6, 4, 8, 12, 1, 7]
output: 8 // best time to buy at 4 and sell at 12

*/

var stockPrices = function(prices) {
  var max = 0;
  var min = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i]
    }
  }

  return max;
}

var assert = function(actual, expected, message) {
  return actual === expected ? actual : message;
}

console.log(assert(stockPrices([5, 6, 4, 8, 12, 1, 7]), 8, 'should return highest range'));
console.log(assert(stockPrices([1, 2, 3, 4, 5, 6, 7]), 6, 'should return highest range'));
console.log(assert(stockPrices([7, 6, 5, 4, 3, 2, 1]), 0, 'should return highest range'));