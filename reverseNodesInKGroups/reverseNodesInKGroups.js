/*
Given a linked list, reverse the nodes in k groups.
Example

For l = [1, 2, 3, 4, 5] and k = 2, the output should be
reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5];
For l = [1, 2, 3, 4, 5] and k = 1, the output should be
reverseNodesInKGroups(l, k) = [1, 2, 3, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and k = 3, the output should be
reverseNodesInKGroups(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11].

*/

var reverseNodesInKGroups = function(list, k) {
  if (!list) {
    return list;
  }

  var node = list;
  var rotationNode = list;
  var count = 0;

  while (node) {
    count++;
    if (count === k) {
      return list;
    }
    node = node.next;
  }

  node = list;

  var prev = null;
  var head = null;
  while (node) {
    if (count === 0) {
      count++;
      prev = node;
      node = node.next
    } else if (count === k) {
      count = 0;
      if (!head) {
        head = rotationNode; 
      }
      rotationNode = node;
    } else {
      var tempNext = node.next;
      prev.next = node.next;
      node.next = rotationNode;
      rotationNode = node;
      node = tempNext;
      count++;
    }

  }

  return list;
}




