/*
Create a function that takes an string input and evaluates the math.

example: '10 + 4 - ( 3 + 2 ) * 2 + 3 / 3'
should output: 5

*/

var stringMath = function(string) {
  string = string.split(' ');
  var result = [];
  var temp, operand;
  var multDiv = false;

  if (string[0] !== '(') {
    result.push(JSON.parse(string[0]));
  } else {
    // result.push(0);
    // result.push('+');
    // string.splice(0, 1);
  }

  for (let i = 1; i < string.length; i++) {
    if (string[i + 1] === '(') {
      result.push(string[i]);
      result.push(JSON.parse(string[i + 2]));
    } else if (string[i] === ')') {
      temp = result.pop();
      operand = result.pop();
      result[result.length - 1] = arithmatic(result[result.length - 1], temp, operand);
    } else if (string[i + 2] === '*' || string[i + 2] === '/') {
      result.push(string[i]);
      result.push(JSON.parse(string[i + 1]));
      result[result.length - 1] = arithmatic(result[result.length - 1], JSON.parse(string[i + 3]), string[i + 2]);
      i += 3;
      multDiv = true;
    } else {
      result[result.length - 1] = arithmatic(result[result.length - 1], JSON.parse(string[i + 1]), string[i]);
      i++;
    }
  }

  if (result.length > 1) {
    result = [JSON.parse(stringMath(result.join(' ')))];
  }
  
  return JSON.stringify(result[0]);
}

var arithmatic = function(total, num, operand) {
  if (operand === '+') {
    total += num;
  } else if (operand === '-') {
    total -= num;
  } else if (operand === '*') {
    total *= num;
  } else if (operand === '/') {
    total /= num;
  }

  return total;
}

// console.log(stringMath('4 + 4')); // 8
// console.log(stringMath('4 - 4')); // 0
// console.log(stringMath('4 * 4')); // 16
// console.log(stringMath('4 / 4')); // 1
console.log(stringMath('10 + 4 - ( 3 + 2 + 2 ) - 2')); //5
console.log(stringMath('10 + 4 - ( 3 + 2 )')); //9
console.log(stringMath('10 + 4 - ( 3 * 2 )')); //8
console.log(stringMath('5 - 2 * 2 + 2 * 1')); //3
// console.log(stringMath('10 - 2 * 2 - ( 2 + 1 ) * 1')); //3

// console.log(stringMath('( 3 + 2 )')); //5


// var test = '1 + 2 + 3';
// test = test.split(' ');
// console.log(test);
// test = test.join(' ');
// console.log(test);