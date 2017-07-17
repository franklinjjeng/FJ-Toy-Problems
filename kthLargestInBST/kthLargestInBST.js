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

var simpleTree = new Tree(3);
simpleTree.addLeft(2);
simpleTree.addRight(4);

console.log(kthLargetsInBST(simpleTree, 2)); // 3
console.log(kthLargetsInBST(simpleTree, 1)); // 4

/*
       5
     /    \
    3      7
  /   \   /  \
 2    4  6    8

*/
var tree = new Tree(5);
tree.addLeft(3);
tree.addRight(7);
tree.left.addLeft(2);
tree.left.addRight(4);
tree.right.addLeft(6);
tree.right.addRight(8);


console.log(kthLargetsInBST(tree, 2)); // 7
console.log(kthLargetsInBST(tree, 1)); // 8


