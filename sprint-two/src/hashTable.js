

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index] is undefined 
  if(this._storage[index] === undefined){
    // set this._storage[index] to an empty array 
    this._storage[index] = []; 
  }
  // store [k,v] in this._storage[index]
  this._storage[index].push([k,v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over each element in this._storage[index] 
  for(var i=0; i<this._storage[index].length; i++){
    // check if key of current element = k 
    if(this._storage[index][i][0] === k){
      // if true, return v 
      return this._storage[index][i][1];
    }
  }
  // return null
  return null; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over each element in this._storage[index]
  for(var i=0; i<this._storage[index].length; i++){
    // check if key of current element = k
    if(this._storage[index][i][0] === k){
      // if true, splice out current element from bucket 
      this._storage[index].splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


