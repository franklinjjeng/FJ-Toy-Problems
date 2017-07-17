/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with properties startTime and endTime . These integers represent the number of 30-minute blocks past 9:00am.

For example:

{startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
  ]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.
Here we've simplified our times down to the number of 30-minute slots past 9:00 am.
But we want the function to work even for very large numbers, like Unix timestamps.
In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/

var mergeRanges = function(array) {
  array.sort((a, b) => a.startTime - b.startTime);
  var result = [array[0]];

  for (var i = 1; i < array.length; i++) {
    if (array[i].startTime <= result[result.length - 1].endTime) {
      if (array[i].endTime > result[result.length - 1].endTime) {
        result[result.length - 1].endTime = array[i].endTime;
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

function assert(expected, actual, message){
  return expected === actual ? actual : message;
}

var deepEquals = function(obj1, obj2) {
  for (var key in obj1) {
    if (typeof obj1[key] === 'object') {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
      if (!obj2[key]) return false;
      if (!deepEquals(obj1[key], obj2[key])) return false;
    }
    else if (obj1[key] !== obj2[key]) return false;
  }
  return Object.keys(obj1).length === Object.keys(obj2).length;
};

var input = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

var output = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
];

console.log(assert(deepEquals(mergeRanges(input), output), true, 'should successfully merge ranges'));

var input = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];
var output = [{startTime: 1, endTime: 3}];

console.log(assert(deepEquals(mergeRanges(input), output), true, 'should successfully merge ranges'));

var input = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}];
var output = [{startTime: 1, endTime: 5}];

console.log(assert(deepEquals(mergeRanges(input), output), true, 'should successfully merge ranges'));

var input =   [
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9},
];

var output = [{startTime: 1, endTime: 10}];

console.log(assert(deepEquals(mergeRanges(input), output), true, 'should successfully merge ranges'));