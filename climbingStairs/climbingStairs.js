/*
You need to climb a staircase that has n steps, and you decide to get some extra exercise by jumping up the steps.
You can cover at most k steps in a single jump.
Return all the possible sequences of jumps that you could take to climb the staircase, sorted.

```
Example

  For n = 4 and k = 2, the output should be

  climbingStair(n, k) =
  [[1, 1, 1, 1],
   [1, 1, 2],
   [1, 2, 1],
   [2, 1, 1],
   [2, 2]]
```

There are 4 steps in the staircase, and you can jump up 2 or fewer steps at a time.
There are 5 potential sequences in which you jump up the stairs either 2 or 1 at a time.
*/

var climbingStairs = function(n, k, results, steps, stepCount) {
  results = results || [];
  steps = steps || [];

  for (var i = 1; i <= k; i++) {
    var stepCount = stepsSum(steps);

    if (i + stepCount <= n) {
      steps.push(i);
      climbingStairs(n, k, results, steps);

    } else if (stepCount === n) {
      
      results.push(steps.slice());
      steps.pop();

      if (i === k) {
        steps.pop();
      }
      break;
    }

    if (i === k) {
      steps.pop();
    }

  }

  return results;
}


var stepsSum = function(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count;
}


console.log(climbingStairs(4, 2))