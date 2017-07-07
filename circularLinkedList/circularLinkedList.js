/*
Given a linked list, determine if it is circular;

example: 1 -> 2 -> 3
              |    |
              5 <- 4
return true as the 5 connects to 2 and becomes circular;
*/

var circularLinkedList = function(node) {
  // TODO
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
e.next = b;

circularLinkedList(a); // true;