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
  var prev1 = prev2 = addition = null;
  var count1 = count2 = maxLength = carry = add = 0;

  while (node1 !== null || node2 !== null) {
    if (node1 !== null) {
      if (node1.value.toString().length > maxLength) {
        maxLength = node1.value.toString().length;
      }
      node1.prev = prev1;
      prev1 = node1;
      node1 = node1.next;
      count1++;
    }

    if (node2 !== null) {
      if (node2.value.toString().length > maxLength) {
        maxLength = node2.value.toString().length;
      }
      node2.prev = prev2;
      prev2 = node2;
      node2 = node2.next;
      count2++;
    }
  }

  while (prev1 !== null || prev2 !== null) {
    if (prev1 === null) {
      addition = addNumbers(0, prev2.value, carry, maxLength);
      add = addition.add;
      prev2.value = add;
      carry = addition.carry;
      prev2 = prev2.prev;
    } else if (prev2 === null) {
      addition = addNumbers(prev1.value, 0, carry, maxLength);
      add = addition.add;
      prev1.value = add;
      carry = addition.carry;
      prev1 = prev1.prev;
    } else {
      addition = addNumbers(prev1.value, prev2.value, carry, maxLength);
      add = addition.add;
      if (count1 > count2) {
        prev1.value = add;
      } else {
        prev2.value = add;
      }
      carry = addition.carry;
      prev1 = prev1.prev;
      prev2 = prev2.prev;
    }
  }

  if (carry > 0) {
    var node = new Node(carry);
    if (count1 > count2) {
      node.next = num1;
      num1 = node;
    } else {
      node.next = num2;
      num2 = node;
    } 
  }

  return count1 > count2 ? num1 : num2;
}

var addNumbers = function(num1, num2, prevCarry, length) {
  var add = JSON.stringify(num1 + num2 + prevCarry);
  var carry = 0;
  if (add.length > length) {
    add = add.split('');
    carry = add.splice(0, add.length - length).join('');
    add = add.join('');
  }

  if (add == 0) {
    add = 0;
  } else {
    add = JSON.parse(add);
  }

  if (carry == 0) {
    carry = 0;
  } else {
    carry = JSON.parse(carry);
  }

  return {add: add, carry: carry};
}

// console.log(addNumbers(500, 500, 0, 3));


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