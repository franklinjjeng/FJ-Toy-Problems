/*
Write a recursive function for generating all permutations of an input string. Return them as a set.
*/

var stringPermutation = function(string, result, combination) {
  result = result || [];
  combination = combination || [];

  for (var i = 0; i < string.length; i++) {
    if (combination.length === string.length) {
      result.push(combination.slice().join(''));
      combination.pop();
      return result;
    } else if (!combination.includes(string.charAt(i))) {
      combination.push(string.charAt(i));
      stringPermutation(string, result, combination);
    }

    if (i === string.length - 1) {
      combination.pop();
    }
  }

  return result.length === 0 ? [string] : result;
}


console.log(stringPermutation('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(stringPermutation('abcd'));
console.log(stringPermutation('ab'));
console.log(stringPermutation('aa'));
console.log(stringPermutation('aba'));