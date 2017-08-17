/*
Each round, players receive a score between 0 and 100,
which you use to rank them from highest to lowest.
So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time,
but players are complaining that their rankings aren't updated fast enough.
You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

For example:

  var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
*/

var sortScores = function(unsortedScores, highestScore) {
  var scoreCounter = new Array(highestScore).fill(0);
  var result = [];

  for (var i = 0; i < unsortedScores.length; i++) {
    var score = unsortedScores[i];
    scoreCounter[score]++;
  }

  for (var i = scoreCounter.length - 1; i >= 0; i--) {
    while(scoreCounter[i] > 0) {
      scoreCounter[i]--;
      result.push(i);
    }
  }

  return result;
}

var unsortedScores = [37, 89, 41, 65, 91, 53];
var HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)); // [91, 89, 65, 53, 41, 37]