/*
Write a recursive function for generating all permutations of an input string. Return them as a set.
No constraints on time or space complexity
*/

var recursiveStringPerm = function(string, current, result) {
  current = current || [];
  result = result || [];

  if (current.length === string.length) {
    result.push(current.slice().join(''));
    return;
  }
  
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (!current.includes(char)) {
      current.push(char);
      recursiveStringPerm(string, current, result);
      current.pop();
    }
  }

  return result;
}


console.log(recursiveStringPerm('ab')); // ['ab', 'ba']
console.log(recursiveStringPerm('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']