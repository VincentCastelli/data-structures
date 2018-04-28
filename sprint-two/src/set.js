var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.length === 0){
    this._storage.push(item);
  } else if (!_.contains(this._storage, item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage.pop(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
add = linear 0(n)
contains = linear O(n)
remove = constant O(1)
 */