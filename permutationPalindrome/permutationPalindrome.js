/*
Write an efficient function that checks whether any permutation of an input string is a palindrome.
You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false

"But 'ivicc' isn't a palindrome!"
If you had this thought, read the question again carefully.
We're asking if any permutation of the string is a palindrome.
Spend some extra time ensuring you fully understand the question before starting.
Jumping in with a flawed understanding of the problem doesn't look good in an interview.
*/

var permutationPalindrome = function(string) {
    var letters = {};
    var oddLetters = 0;

    for (var i = 0; i < string.length; i++) {
      var letter = string.charAt(i);
      if (!letters[letter]) {
        letters[letter] = 1;
      } else {
        letters[letter]++;
      }
    }

    for (var key in letters) {
      if (letters[key] % 2 !== 0) {
        oddLetters++;
      }
      if (oddLetters > 1) {
        return false;
      }
    }

    return true;
}

console.log(permutationPalindrome('civic')); // true;
console.log(permutationPalindrome('ivicc')); // true;
console.log(permutationPalindrome('civil')); // false;
console.log(permutationPalindrome('livci')); // false;