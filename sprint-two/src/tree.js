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

treeMethods.contains = function(target) {
  var rootNode = this;
  var found = false;
  if (target === rootNode.value) {
    return true;
  }
  var checkChildren = function (target, currentNode) {
    for (var i = 0; i < currentNode.children.length; i++) {
      if (target === currentNode.children[i].value) {
        found = true;
      } else {
        checkChildren(target, currentNode.children[i]);
      }
    }
  }; 

  if (rootNode.children.length > 0) {
    checkChildren(target, rootNode);
  }
  
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
