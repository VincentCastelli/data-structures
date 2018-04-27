var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {
    value: value,
    children: [] 
  };
  
  _.extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target, start) {
  for (var i = 0; i < this.children.length; i++) {
    var currentNode = start || this.children[i];
    if (target === this.children[i].value) {
      return true;
    }
    // if (this.children.length > 0) { 
    //   return this.contains(target, currentNode.children[i]);
    // } else {
    //   return false; 
    // } 
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
