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

  var floorIndex = 0;
  var ceilingIndex = words.length - 1;
  var first = words[0];

  while (floorIndex < ceilingIndex) {

    var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

    if (first > words[guessIndex]) {
      ceilingIndex = guessIndex;
    } else {
      floorIndex = guessIndex;
    }

    if (floorIndex + 1 === ceilingIndex) {
      break;
    }

  }

  return ceilingIndex;
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


words = [5, 1, 2, 3, 4];
console.log(findRotationPoint(words)); // 1

words = [2, 3, 4, 5, 1];
console.log(findRotationPoint(words)); // 4


