var BinarySearchTree = function(value) {
  var newBinaryTree = {};

  newBinaryTree.value = value;  
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, newBinaryTreeMethods);


  return newBinaryTree;
};



var newBinaryTreeMethods = {};


newBinaryTreeMethods.insert = function (value) {
  var rootNode = this; 
  var currentNode = rootNode;
  
  var newNode = {
    value: value,
    left: null,
    right: null
  };
  
  while (currentNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    }

    if (newNode.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

newBinaryTreeMethods.contains = function (target) {

};

newBinaryTreeMethods.depthFirstLog = function () {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
