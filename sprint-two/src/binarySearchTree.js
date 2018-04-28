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
  var rootNode = this;
  var found = false;
  if (target === rootNode.value) {
    return true;
  }
  var checkLeft = function (target, currentNode) {
    if (target === currentNode.value) {
      found = true;
    } else if (target < currentNode.value && currentNode.left) {
      checkLeft(target, currentNode.left);
    } else if (target > currentNode.value && currentNode.right) {
      checkLeft(target, currentNode.right);
    }
  };
  var checkRight = function (target, currentNode) {
    if (target === currentNode.value) {
      found = true;
    } else if (target < currentNode.value && currentNode.left) {
      checkLeft(target, currentNode.left);
    } else if (target > currentNode.value && currentNode.right) {
      checkLeft(target, currentNode.right);
    }
  };

  if (target < rootNode.value) {
    checkLeft(target, rootNode.left);
  }
  if (target > rootNode.value) {
    checkRight(target, rootNode.right);
  }
  
  return found;
};

newBinaryTreeMethods.depthFirstLog = function (func) {
  var rootNode = this;
  var funcLeft = function (func, currentNode) {
    func(currentNode.value);
    if (currentNode.left) {
      funcLeft(func, currentNode.left);
    } else if (currentNode.right) {
      funcRight(func, currentNode.right);
    }
  };
  var funcRight = function (func, currentNode) {
    func(currentNode.value);
    if (currentNode.left) {
      funcLeft(func, currentNode.left);
    } else if (currentNode.right) {
      funcRight(func, currentNode.right);
    }
  };
  func(rootNode.value);
  if (rootNode.left) {
    funcLeft(func, rootNode.left);
  }
  if (rootNode.right) {
    funcRight(func, rootNode.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
