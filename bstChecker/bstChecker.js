/*
Write a function to check that a binary tree is a valid binary search tree.
*/


/*
      10
    /    \
    5     12
   / \   /  \
  3   6 11   13

*/


var BinaryTreeNode = function(value) {
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

var bstChecker = function(node, lower, upper) {
  if (node.value >= upper || node.value <= lower) {
    return false;
  }

  if (node.left) {
    if (!bstChecker(node.left, lower, node.value)) {
      return false;
    }
  }

  if (node.right) {
    if (!bstChecker(node.right, node.value, upper)) {
      return false;
    }
  }

  return true;
}

var top = new BinaryTreeNode(10);
top.insertLeft(5)
top.insertRight(12);
top.left.insertLeft(3);
top.left.insertRight(6);
top.right.insertLeft(11);
top.right.insertRight(13);

console.log(bstChecker(top)); // true;