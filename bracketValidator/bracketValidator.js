/*
write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false
*/

var bracketValidator = function(string) {
  var close = [];

  for (var i = 0; i < string.length; i++) {

    if (string.charAt(i) === '{') {
      close.push('}');
    } else if (string.charAt(i) === '(') {
      close.push(')');
    } else if (string.charAt(i) === '[') {
      close.push(']');
    } else if (string.charAt(i) === close[close.length - 1]) {
      close.pop();
    } else if (string.charAt(i) !== ' ') {
      return false;
    }

  }

  return close.length === 0;
}

console.log(bracketValidator("{ [ ] ( ) }")); // true
console.log(bracketValidator("{ [ ( ] ) }")); // false
console.log(bracketValidator("{ [ }")); //false
console.log(bracketValidator("{ [ () ] }")); // true
console.log(bracketValidator("{ [ () ]")); // false