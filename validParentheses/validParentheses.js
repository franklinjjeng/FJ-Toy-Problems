function validParentheses(parens){
  // // Niave solution
  // var checked = {};
  // for (var i = 0; i < parens.length; i++) {
  //   if (checked[i]) {
  //   } else if (parens.charAt(i) === '(') {
  //     for (var j = i + 1; j < parens.length; j++) {
  //       if (checked[j]) {
  //       } else if (parens.charAt(j) === ')') {
  //         checked[j] = true;
  //         break;
  //       } else if (j === parens.length - 1 && parens.charAt(j) !== ')') {
  //         return false;
  //       }
  //     }
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  var count = i = 0;
  while (i < parens.length && count >= 0) {
    count += parens.charAt(i) === '(' ? 1 : -1;
    i++;
  }
  return count === 0;
}


function assert (actual, expected, message) {
  return actual === expected ? actual : message;
}

console.log(assert(validParentheses('()'), true, 'should return true for valid cases'));
console.log(assert(validParentheses(')'), false, 'should return false for invalid cases'));
console.log(assert(validParentheses('())'), false, 'should return false for invalid cases'));
console.log(assert(validParentheses('(())'), true, 'should return true for valid cases'));
console.log(assert(validParentheses('()()'), true, 'should return true for valid cases'));
console.log(assert(validParentheses('(())((()())())'), true, 'should return true for valid cases'));
console.log(assert(validParentheses(')('), false, 'should return false for valid cases'));
console.log(assert(validParentheses('())(()'), false, 'should return false for valid cases'));
console.log(assert(validParentheses('(((((((('), false, 'should return false for valid cases'));