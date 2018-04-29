var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newBucket = [[k, v]];
  var newTuple = [k, v];

  if (this._storage.get(index) === undefined) { // if current storage cell is empty
    this._storage.set(index, newBucket); // push bucket with tuple inside to current storage cell
  } else {
    this._storage.get(index)[0].push(newTuple); // push tuple to existing bucket at current storage cell
  }
  
  if (k === this._storage.get(index)[0][0]) {
    this._storage.get(index)[0][1] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); // [0]
  
  // [['Steven', 'Segal']]
  if (k === this._storage.get(index)[0][0]) {
    return this._storage.get(index)[0][1];
  }  
  // return [bucket[1]]
  console.log(this._storage.get(index));  
};

HashTable.prototype.remove = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


