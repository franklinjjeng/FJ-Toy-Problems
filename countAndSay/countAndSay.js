/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/


var countAndSay = function(n, result) {
  result = result || '1';
  var count = 0;
  var num = result.charAt(0);
  var temp = '';

  if (n - 1 === 0) {
    return result;
  }

  for (var i = 0; i < result.length; i++) {
    if (num === result.charAt(i)) {
      count++;
    } else {
      temp = temp + JSON.stringify(count) + num;
      count = 1;
      num = result.charAt(i);
    }
  }

  temp = temp + JSON.stringify(count) + num;
  return countAndSay(n - 1, temp);
}


console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));


