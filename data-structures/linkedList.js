var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
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

LinkedList.prototype.removeHead = function() {
  if (this.head === null) return;

  this.head = this.head.next;
}

LinkedList.prototype.find = function(value) {
  if (!this.head) return false;
  var node = this.head;

  while (node !== null) {
    if (node.value === value) return true;
    node = node.next;
  }

  return false;
}

var linked = new LinkedList();
linked.addToTail(1);
linked.addToTail(2);
linked.addToTail(3);
console.log(linked.find(3)); // true;
console.log(linked.find(1)); // true;
linked.removeHead();
console.log(linked.find(1)); // false;


console.log(linked);