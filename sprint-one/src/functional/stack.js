var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    var result;
    if (length > 0) {
    result = storage[length-1];
    delete storage[length-1];
    length--;
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};

//var stack = new Stack() --> instantiation of {} with stack methods
// stack.push('a'); --> storage[o] = a;
// purpose is not to return the empty instance but to get the stack methods 
// that can manipulate your private storage
