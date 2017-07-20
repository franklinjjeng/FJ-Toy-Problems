/*
You've built an inflight entertainment system with on-demand movie streaming.
Users on longer flights like to start a second movie right when their first one ends,
but they complain that the plane usually lands before they can see the ending.
So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes)
and an array of integers movieLengths (in minutes) and returns a boolean indicating
whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:
  Assume your users will watch exactly two movies
  Don't make your users watch the same movie twice
  Optimize for runtime over memory
*/

var inflightEntertainment = function(flightTime, movieTimes) {
  
  for (var i = 0; i < movieTimes.length; i++) {
    for (var j = i + 1; j < movieTimes.length; j++) {
      if (movieTimes[i] + movieTimes[j] === flightTime) {
        return true;
      }
    }
  }

  return false;
}

var flightTime = 30;
var movieTimes = [15, 20, 10, 23];

console.log(inflightEntertainment(flightTime, movieTimes)); // True

flightTime = 40;
movieTimes = [15, 20, 10, 23];

console.log(inflightEntertainment(flightTime, movieTimes)); // False

flightTime = 33;
movieTimes = [15, 20, 10, 23];

console.log(inflightEntertainment(flightTime, movieTimes)); // True