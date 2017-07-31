/*
Write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.
*/

var deck = [];
var buildDeck = function(deck) {
  var suits = ['s', 'c', 'd', 'h'];
  for (var j = 0; j < suits.length; j++) {
    for (var i = 1; i <= 13; i++) {
      deck.push(i + suits[j]);
    }
  }
  return deck;
}

var singleRiffShuffle = function(deck) {
  buildDeck(deck);
  var half1 = deck.splice(0, 26);
  var half2 = deck.splice(0);

  for (var i = 1; i <= 26; i++) {
    deck.push(half1.shift());
    deck.push(half2.shift());
  }

  return deck;
}

console.log(singleRiffShuffle(deck));