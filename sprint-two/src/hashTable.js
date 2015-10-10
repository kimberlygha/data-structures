
//Pseudoclassical
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//NOTE: Redo code so that instead of setting keys on the LimitedArray object, we use the provided methods to access and worth with the actual storage array

HashTable.prototype.insert = function(k, v) {
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index] (bucket) is undefined 
  if(this._storage.get(index) === undefined){
    // set this._storage[index] to an empty array 
    this._storage.set(index, []); 
    // store [k,v] in this._storage[index]
    this._storage.get(index).push([k,v]);
  } else {
  //else (if bucket already exists)
    // declare variable alreadyExists and set to false
    var alreadyExists = false;
    // iterate over each element in this._storage[index]
    //this._storage.each(function(){});
    for (var i = 0; i < this._storage.get(index).length; i++) {
      // if current element[0] equals k
      var currentEl = this._storage.get(index)[i]
      if (currentEl[0] === k) {
        // set current element[1] to v (overwrite values that have same key)
        currentEl[1] = v;
        // change alreadyExists variable to true
        alreadyExists = true;
      }
    }
    // if alreadyExists is false
    if (alreadyExists === false) {
      // store [k,v] in this._storage[index]
      this._storage.get(index).push([k,v]);
    } 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over each element in this._storage[index] 
  for(var i=0; i<this._storage.get(index).length; i++){
    // check if key of current element = k 
    if(this._storage.get(index)[i][0] === k){
      // if true, return v 
      return this._storage.get(index)[i][1];
    }
  }
  // return null
  return null; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over each element in this._storage[index]
  for(var i=0; i<this._storage.get(index).length; i++){
    // check if key of current element = k
    if(this._storage.get(index)[i][0] === k){
      // if true, splice out current element from bucket 
      this._storage.get(index).splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert - constant
 retrieve - constant
 remove - constant
 all are constant b/c for loop is only within small buckets.
 */


