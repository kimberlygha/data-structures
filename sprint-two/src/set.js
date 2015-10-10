var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check to see if item is already a key in storage
  if (!this._storage[item]) {
    // if not, set item as a key of storage with a value of true
    this._storage[item] = true;
  }

};

setPrototype.contains = function(item) {
  // if item is a key of storage
  if (this._storage[item]) {
    // return true 
    return true;
  }
  // return false
  return false;
};

setPrototype.remove = function(item) {
  // delete storage with key of item
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add/contains/remove - constant
 */
