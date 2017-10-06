/*
Build a function to create a deck and a function that shuffles it
*/

var deck = [];

var buildDeck = function(deck) {
  var suits = ['s', 'c', 'd', 'h'];
  for (var i = 1; i <= 13; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push(i + suits[j]);
    }
  }

  return;
}

var shuffle = function(deck) {
  for (var i = 0; i < deck.length; i++) {
    var random = Math.floor((Math.random() * (52 - i)) + i);
    var temp = deck[i];
    deck[i] = deck[random];
    deck[random] = temp;
  }
}

buildDeck(deck);
shuffle(deck);

console.log(deck);