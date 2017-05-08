/*
You quirky boss collects rare, old coins...
They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
 your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

function coins (amount, denominations, sum, count) {
  // decision tree problem
  // need traverse through the denominations
    // recursively call the function function until the amount is met
    // if amount is met, add to the count

  count = count || 0;
  sum = sum || 0;

  for (var i = 0; i < denominations.length; i++) {
    if (sum + denominations[i] <= amount) {
      sum += denominations[i];
      if (amount === sum) {
        return count + 1;
      } else {
        count = coins(amount, denominations, sum, count);
      }
      sum -= denominations[i];
    }
  }

  console.log(count);
  return count;
}


function assert (actual, expected, message) {
  return actual === expected ? actual : message;
}


console.log(assert(coins(4, [1, 2, 3]), 4, 'should return the number of combinations'));