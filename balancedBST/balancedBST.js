/*
Write a function to see if a binary tree is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.

Here's a sample binary tree node class:


*/
function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

var balancedBST = function(node) {
  var children = [node];
  var empty = false;

  while (!empty) {
    var check = children;
    empty = true;
    children = [];

    for (var i = 0; i < check.length; i++) {
      if (check[i] === null) {
        children.push(null);
        children.push(null);
      } else if (check[i].left !== null || check[i].right !== null) {
        empty = false;
        children.push(check[i].left);
        children.push(check[i].right);
      }
    }

    if (!empty && !symmetrical(children)) {
      return false;
    }

  }

  return true;
}

var symmetrical = function(array) {
  for (var i = 0; i < array.length / 2; i++) {
    if ((array[i] !== null && array[array.length - 1 - i] === null) || (array[i] === null && array[array.length - 1 - i] !== null)) {
      return false;
    }
  }

  return true;
}

// console.log(symmetrical([null, null])); // true
// console.log(symmetrical([1, null, null, 2])); // true
// console.log(symmetrical([1, 2, null, 3])); // false;

/*
          7
        /   \
      5      10
     / \    /  \
        6  8
*/


var tree = new BinaryTreeNode(7);
tree.insertLeft(5);
tree.insertRight(10);
tree.left.insertRight(6);
tree.right.insertLeft(8);

console.log(balancedBST(tree)); // true;

var tree2 = new BinaryTreeNode(7);
tree2.insertLeft(5);
tree2.insertRight(10);
tree2.left.insertRight(6);

console.log(balancedBST(tree2)); // false;

/*
          7
        /   \
      5      10
     / \    /  \
    3   6       11
  /  \
 2    4
*/

var tree3 = new BinaryTreeNode(7);
tree3.insertLeft(5);
tree3.insertRight(10);
tree3.right.insertRight(11);
tree3.left.insertRight(6);
tree3.left.insertLeft(3);
tree3.left.left.insertLeft(2);
tree3.left.left.insertRight(4);

console.log(balancedBST(tree3)); // false;

var tree4 = new BinaryTreeNode(7);
console.log(balancedBST(tree4)); // true;