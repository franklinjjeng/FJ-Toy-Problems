/*
Given a BST, find the kth largest item in the BST
*/

var Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.addLeft = function(value) {
  if (this.left) {
    return 'left already exists';
  }

  var node = new Tree(value);
  this.left = node;
}

Tree.prototype.addRight = function(value) {
  if (this.right) {
    return 'right already exists';
  }

  var node = new Tree(value);
  this.right = node;
}

var kthLargetsInBST = function(root, k) {
  // TODO
}

