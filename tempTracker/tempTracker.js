/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time.
Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers.
We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..110.

If there is more than one mode, return any of the modes.
*/

var TempTracker = function() {
  // TODO
  this.temp = Array(110).fill(0);
  this.max = null;
  this.min = null;
  this.mean = null;
  this.mode = null;
  this.numberTemps = 0;
  this.maxOccurences = 0;
}

TempTracker.prototype.insert = function(value) {

  if (this.max === null || this.max < value) this.max = value;
  if (this.min === null || this.min > value) this.min = value;
  if (this.mean === null) this.mean = value;

  this.temp[value]++;
  if (this.temp[value] > this.maxOccurences) {
    this.maxOccurences = this.temp[value];
    this.mode = value;
  }

  var tempMean = this.mean * this.numberTemps;
  this.numberTemps++;
  this.mean = (tempMean + value) / this.numberTemps;
  
}

TempTracker.prototype.getMax = function() {
  return this.max;
}

TempTracker.prototype.getMin = function() {
  return this.min;
}

TempTracker.prototype.getMean = function() {
  return this.mean;
}

TempTracker.prototype.getMode = function() {
  return this.mode;
}

var tempTrack = new TempTracker();
tempTrack.insert(70);
tempTrack.insert(60);
tempTrack.insert(70);
tempTrack.insert(50);
// console.log(tempTrack.getMax());
// console.log(tempTrack.getMin());
// console.log(tempTrack.getMean());

console.log(tempTrack);


