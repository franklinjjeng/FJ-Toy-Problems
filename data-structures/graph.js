var Graph = function() {
  this.nodes = {};
}

var Node = function(value) {
  this.value = value;
  this.edges = null;
}

Graph.prototype.addNode = function(value) {
  var node = new Node(value);
  this.nodes[value] = node;
}

Graph.prototype.addEdge = function(val1, val2) {
  if (this.nodes[val1] === undefined || this.nodes[val2] === undefined) return 'nodes need to exist';

  if (this.nodes[val1].edges === null) this.nodes[val1].edges = {};
  this.nodes[val1].edges[val2] = this.nodes[val2];

  if (this.nodes[val2].edges === null) this.nodes[val2].edges = {};
  this.nodes[val2].edges[val1] = this.nodes[val1];
}

Graph.prototype.hasEdge = function(val1, val2) {
  return this.nodes[val1].edges[val2] ? true : false;
}

Graph.prototype.removeEdge = function(val1, val2) {
  if (this.nodes[val1].edges[val2] === undefined) return 'edge does not exist';
  delete this.nodes[val1].edges[val2]
  if (Object.keys(this.nodes[val1].edges).length === 0) this.nodes[val1].edges = null;
  delete this.nodes[val2].edges[val1]
  if (Object.keys(this.nodes[val2].edges).length === 0) this.nodes[val2].edges = null;
}

Graph.prototype.removeNode = function(value) {
  if (this.nodes[value] === undefined) return 'node does not exist';

  if (this.nodes[value].edges !== null) {
    for (var key in this.nodes[value].edges) {
      this.removeEdge(value, key);
    }
  }

  delete this.nodes[value];
}

var graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addEdge(1, 2)
graph.addNode(3);
graph.addEdge(1, 3);
console.log(graph.hasEdge(1, 3)); // true;
graph.removeEdge(1, 3);
console.log(graph.hasEdge(1, 3)); // false;
graph.removeNode(1);

console.log(graph.nodes);





