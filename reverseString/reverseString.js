/*
Write a function to reverse a string in-place.
*/

var reverseString = function(string) {
  string = string.split('');
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    var temp = string[i];
    string[i] = string[string.length - 1 - i]
    string[string.length - 1 - i] = temp;
  }

  return string.join('');
}

var assert = function(expected, actual, message) {
  return expected === actual ? expected : message;
}

console.log(assert(reverseString('asdf'), 'fdsa', 'should reverse the string'));
console.log(assert(reverseString('a'), 'a', 'should reverse the string'));