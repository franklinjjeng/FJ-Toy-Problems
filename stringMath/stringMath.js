/*
Create a function that takes an string input and evaluates the math.

example: '10 + 4 - ( 3 + 2 ) * 2 + 3 / 3'
should output: 5

*/

var stringMath = function(string) {
  string = string.split(' ');

  // handle order of operations
  if (string.includes('(')) {
    var frontParen = string.indexOf('(');
    var backParen = string.indexOf(')');
    var subString = string.splice(frontParen, backParen - frontParen + 1);
    subString = subString.splice(1, subString.length - 2).join(' ');
    subString = stringMath(subString);
    string.splice(frontParen, 0, subString);
  }

  var result = JSON.parse(string[0]);

  // handle basic arithmetic
  for (let i = 1; i < string.length; i++) {
    if (string[i] === '+') {
      result += JSON.parse(string[++i]);
    } else if (string[i] === '-') {
      result -= JSON.parse(string[++i]);
    } else if (string[i] === '*') {
      result *= JSON.parse(string[++i]);
    } else if (string[i] === '/') {
      result /= JSON.parse(string[++i]);
    }
  }

  return JSON.stringify(result);
}

// console.log(stringMath('4 + 4')); // 8
// console.log(stringMath('4 - 4')); // 0
// console.log(stringMath('4 * 4')); // 16
// console.log(stringMath('4 / 4')); // 1
console.log(stringMath('10 + 4 - ( 3 + 2 ) * 2 + 3 / 3')); //5

