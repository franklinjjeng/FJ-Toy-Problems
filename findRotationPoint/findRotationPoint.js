/*
Write a function for finding the index of the "rotation point,"
which is where I started working from the beginning of the dictionary.
This array is huge (there are lots of words I don't know) so we want to be efficient here.

example: 
  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

*/

var findRotationPoint = function(words) {
  for (var i = 1; i < words.length; i++) {
    if (words[i - 1] > words[i]) {
        return i;
    }
  }

  return 'no rotation';
}

var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here! index 5
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words)); // 5




