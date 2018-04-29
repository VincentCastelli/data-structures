

// Instantiate a new graph
var Graph = function () {
  this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.newGraph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.newGraph.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.newGraph[node];

  for (var i = 0; i < Object.keys(this.newGraph).length; i++) {
    if (this.newGraph[Object.keys(this.newGraph)][i] === node) {
      this.newGraph[Object.keys(this.newGraph)].splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.newGraph[fromNode].includes(toNode) && this.newGraph[toNode].includes(fromNode)) {
    return true;
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(Number(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.newGraph[fromNode].length; i++) {
    if (this.newGraph[fromNode][i] === toNode) {
      this.newGraph[fromNode].splice(i, 1);
    }
  }

  for (var i = 0; i < this.newGraph[toNode].length; i++) {
    if (this.newGraph[toNode][i] === fromNode) {
      this.newGraph[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (callback) {
  for (var i = 0; i < Object.keys(this.newGraph).length; i++) {
    callback(Object.keys(this.newGraph)[i]);
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = constant O(1)
 contains = constant O(1)
 removeNode = linear O(n)
 hasEdge = constant O(1)
 addEdge = constant O(1)
 removeEdge = linear O(n)
 forEachNode = linear O(n)
 */
