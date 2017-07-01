/*
Given two linked lists that represent a large number,
add them together and represent it as a linked list

example:
// it should be noted taht the arrays are representations of a linked list with structure node.value and node.next
For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.
*/


var addTwoHugeNumbers = function(num1, num2) {
  var node1 = num1;
  var node2 = num2;
  var arrayList1 = [];
  var arrayList2 = [];
  var carry = 0;

  while (node1 !== null || node2 !== null) {
    if (node1 !== null) {
      arrayList1.push(node1.value);
      node1 = node1.next;
    }
    if (node2 !== null) {
      arrayList2.push(node2.value); 
      node2 = node2.next
    }
  }

  var fill0 = Array(Math.abs(arrayList1.length - arrayList2.length)).fill(0);
  if (arrayList1.length > arrayList2.length) {
    arrayList2 = fill0.concat(arrayList2);
  } else {
    arrayList1 = fill0.concat(arrayList1);
  }

  for (var i = arrayList1.length - 1; i >= 0; i--) {
    var addition = addNumbers(arrayList1[i], arrayList2[i], carry);
    arrayList1[i] = addition.add;
    carry = addition.carry;
  }

  var prev = null;
  for (var i = arrayList1.length - 1; i >= 0; i--) {
    var node = new Node(arrayList1[i]);
    node.next = prev;
    prev = node;
  }

  if (carry > 0) {
    node = new Node(carry);
    node.next = prev;
    prev = node;
  }

  return prev;
}

var addNumbers = function(num1, num2, prevCarry) {
  var add = JSON.stringify(num1 + num2 + prevCarry);
  var carry = 0;

  add = add.split('');

  if (add.length > 4) {
    carry = add.splice(0, add.length - 4).join('');
  }

  while (add[0] === '0') {
    add.splice(0, 1);
  }

  add = add.join('');

  if (add.length === 0) {
    add = 0;
  } else {
    add = JSON.parse(add);
  }
  if (carry.length === 0) {
    carry = 0;
  } else {
    carry = JSON.parse(carry);
  }

  return {add: add, carry: carry};
}

// console.log(addNumbers(1999, 8001, 0));


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
  } else {
    this.tail.next = node;
  }
    this.tail = node;
};

var a = new LinkedList();
a.addToTail(9876);
a.addToTail(5432);
a.addToTail(1999);
var b = new LinkedList();
b.addToTail(1);
b.addToTail(8001);


console.log(addTwoHugeNumbers(a.head, b.head));