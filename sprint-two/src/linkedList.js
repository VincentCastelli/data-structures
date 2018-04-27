var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.head === null) { // if head is null
      this.head = newNode; // assign head to value
    } else {
      this.head.next = newNode; // if head exists, assign newNode to next 
    }

    this.tail = newNode; // why does setting this.tail equal to newNode.value not work when you return this.tail?
    return this.tail.value;
  };

  list.removeHead = function() {

    if (this.head.next) { //if next exists  --> node5
      this.head = this.head.next; //reassign head to next
    } else { //else
      this.head = null; //head = null
      this.tail = null; //tail = null
    }
    return this.head.next;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
