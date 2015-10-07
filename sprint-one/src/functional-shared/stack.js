var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    length : 0
  };
  // Fawn's note: It's ok for storage to be public in all except functional

  // extend someInstance with keys in stackMethods
  extend(someInstance, stackMethods);

  // Use an object with numeric keys to store values
  return someInstance;
};

//Shared methods
var stackMethods = {

  push : function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop : function() {
    var result;
    if (this.length > 0) {
    result = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    }
    return result;
  },

  size : function() {
    return this.length;
  }

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

// Fawn's note: "storage" as a private variable in Stack would not have been accessible from stackMethods without "this", it seems