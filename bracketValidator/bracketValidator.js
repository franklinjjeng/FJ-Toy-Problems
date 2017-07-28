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
  var bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (bracketMap[char]) {
      close.push(bracketMap[char]);
    } else if (char !== ' ') {
      if (close[close.length - 1] === char) {
        close.pop();
      } else {
        return false;
      }
    }
  }

  return close.length === 0 ? true : false;
}

console.log(bracketValidator("{ [ ] ( ) }")); // true
console.log(bracketValidator("{ [ ( ] ) }")); // false
console.log(bracketValidator("{ [ }")); //false
console.log(bracketValidator("{ [ () ] }")); // true
console.log(bracketValidator("{ [ () ]")); // false