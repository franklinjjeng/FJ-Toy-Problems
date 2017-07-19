/*
You have a linked list and want to find the kth to last node.
Write a function kthToLastNode() that takes an integer k and the headNode of a singly linked list,
 and returns the kth to last node in the list.

For example:

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// returns the node with value "Devil's Food" (the 2nd to last node)
*/

var kthToLastNode = function(k, list) {
  var prev = null;
  var node = list;
  var count = 0;

  while (node) {
    node.prev = prev;
    prev = node;
    node = node.next;
    count++;
  }

  if (k > count) {
    return 'not enough items in list';
  }

  for (var i = 1; i < k; i++) {
    prev = prev.prev
  }

  return prev.value;
};

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));