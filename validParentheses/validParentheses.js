/*
Write a function called validParentheses that takes a string of parentheses, 
and determines if the order of the parentheses is valid. validParentheses 
should return true if the string is valid, and false if it's invalid.
*/

function validParentheses(parens){

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