
//Pseudoclassical
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
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
    this.size++;
    // resize
    if((this.size / this._limit) >= 0.75) {
      this.checkResize(this._limit*2);
    };
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
  for(var i=0; i< this._storage.get(index).length; i++){
    // check if key of current element = k
    if(this._storage.get(index)[i][0] === k){
      // if true, splice out current element from bucket 
      this._storage.get(index).splice(i,1);
    }
  }
  // if this bucket is empty
  if (this._storage.get(index).length === 0) {
    // decrement size
    this.size--;
    // resize
    if((this.size / this._limit) < 0.25){
     this.checkResize(this._limit/2);
    }
  }
};

HashTable.prototype.checkResize = function (newLimit) {
  // store this hashTable in a variable called hash
  var hash = this; 
  // declare a function to resize hashtable

    // create new hash table and store in newHash
    var newHash = new HashTable();
    newHash._limit = newLimit;  
    // iterate over all elements of original HashTable
    this._storage.each(function(elm, i, strg){
      //if elm is not undefined
      if (elm !== undefined) {
        // iterate over key value pairs
        for(var j = 0; j<elm.length; j++){
          // insert current element into new HT
          newHash.insert(elm[j][0],elm[j][1]);
        }
      }
    });
    // set this to new hash table
    hash = newHash; 

  // declare newLimit variable 
  // var newLimit;
  // if size / limit > .75
  // if((this.size / this._limit) >= 0.75){
  //   // double the size of limit and store in newLimit
  //   newLimit = this._limit*2;
  //   resize();
  // }
  // // if size / limit < .25
  // if((this.size / this._limit) < 0.25){
  //         debugger;
  //   // half the size of limit and store in newLimit
  //   newLimit = this._limit/2; 
  //   resize();
  // }

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert - constant
 retrieve - constant
 remove - constant
 all are constant b/c for loop is only within small buckets.
 */


