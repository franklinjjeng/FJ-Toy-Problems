/*
Note: Try to solve this task in O(n) time using O(1) additional space,
since this is what you'll be asked during an interview.

Given a singly linked list of integers l and a non-negative integer n,
move the last n list nodes to the beginning of the linked list.

Example

For l = [1, 2, 3, 4, 5] and n = 3, the output should be
rearrangeLastN(l, n) = [3, 4, 5, 1, 2];
For l = [1, 2, 3, 4, 5, 6, 7] and n = 1, the output should be
rearrangeLastN(l, n) = [7, 1, 2, 3, 4, 5, 6].
*/

var rearrangeLastN = function(list, n) {
  if (!list || n === 0) {
    return list;
  }

  var node = list;
  var prev = null;

  while (node) {
    node.prev = prev;
    prev = node;
    node = node.next;
  }

  var subTail = prev;

  for (var i = 1; i < n; i++) {
    prev = prev.prev;
  }

  if (!prev.prev) {
    return list;
  }

  prev.prev.next = null;
  subTail.next = list;

  return prev;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(rearrangeLastN(a, 3)); // [c, d, e, a, b]

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(rearrangeLastN(a, 5)); // [a, b, c, d, e]

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(rearrangeLastN(null, 1)); // null

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(rearrangeLastN(a, 0)); // [a, b, c, d, e]