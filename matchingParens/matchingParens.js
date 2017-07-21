/*
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis,
finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis),
the output should be 79 (position of the last parenthesis).
*/

var matchingParens = function(string, openParenIndex) {
  // TODO
}


var string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
console.log(matchingParens(string, 10)); // 79

string = '(blah blah())';
console.log(matchingParens(string, 10)); // 11
console.log(matchingParens(string, 0)); // 12

string = '(';
console.log(matchingParens(string, 0)); // 'no matching parens'