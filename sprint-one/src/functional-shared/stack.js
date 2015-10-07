var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {

  };

  someInstance.prototype = stackMethods;

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  return someInstance;
};

//Shared methods
var stackMethods = {

  push : function(value) {
    storage[length] = value;
    length++;
  },

  pop : function() {
    var result;
    if (length > 0) {
    result = storage[length-1];
    delete storage[length-1];
    length--;
    }
    return result;
  },

  size : function() {
    return length;
  }

};


