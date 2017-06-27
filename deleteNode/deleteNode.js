/*
Given a single linked list, delete a node in the middle given only one node.
The linked list should remain continous.
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var deleteNode = function(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}


var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);

console.log(a);