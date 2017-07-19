/*
Given a linked list, reverse it in O(n) time and O(1) space
*/

var reverseLinkedList = function(list) {
  var node = list;
  var prev = null;

  while (node) {
    var next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}

var list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);


// console.log(list.head);
console.log(reverseLinkedList(list.head));
