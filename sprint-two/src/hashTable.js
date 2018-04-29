var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newBucket = [[k, v]];
  var newTuple = [k, v];
  var exists = false;

  if (this._storage.get(index) !== undefined) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) {
        exists = true;
        this._storage.get(index)[i][1] = v;
      } 
    }

    if (!exists) {
      this._storage.get(index)[0].push(newTuple);
    }
  } else {
    this._storage.set(index, newBucket);
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


