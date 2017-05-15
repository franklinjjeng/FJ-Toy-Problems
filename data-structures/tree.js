var Tree = function (value) {
  this.value = value;
  this. children = null;
}

Tree.prototype.addChild = function (value) {
  var node = new Tree(value);
  if (this.children === null) this.children = [node];
  else this.children.push(node); 
};

// DFS
Tree.prototype.find = function(value) {
  if (this.value === value) return true;

  if (this.children !== null) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].find(value)) return true;
    }
  }

  return false;
}

// BFS
Tree.prototype.findBFS = function(value) {
  var next = this.children;
  var child = [];

  if (this.value === value) return true;

  while (next.length > 0) {
    for (let i = 0; i < next.length; i++) {
      
      if (next[i].value === value) return true;

      if (next[i].children !== null) {
        for (let j = 0; j < next[i].children.length; j++) {
          child.push(next[i].children[j]);
        }
      }

    }

    next = child;
    child = [];
  }

  return false;
}

var tree = new Tree(1);
console.log(tree.findBFS(1)); // true;
tree.addChild(2);
tree.addChild(3);
console.log(tree.findBFS(3)); // true;
console.log(tree.findBFS(4)); // false;
tree.children[0].addChild(4);
tree.children[0].addChild(5);
tree.children[1].addChild(6);
console.log(tree.findBFS(5)); // true;

// console.log(tree);