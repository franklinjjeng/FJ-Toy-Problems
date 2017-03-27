var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value) {
  this.val = value;
  this.next = null;
}

LinkedList.prototype.addToTail = function (value) {
  var node = new Node(value);
  if (this.tail === null) this.head = this.tail = node;
  else this.tail.next = this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  if (this.head !== null) this.head = this.head.next;
}

LinkedList.prototype.contains = function(value) {
  var node = this.head;
  while (node) {
    if (node.val === value) return true;
    node = node.next;
  }
  return false;
}


var linked = new LinkedList();
linked.addToTail(1);
linked.addToTail(2);
linked.addToTail(3);
linked.removeHead();
console.log(linked.contains(3));
console.log(linked.contains(5));

console.log(linked);
