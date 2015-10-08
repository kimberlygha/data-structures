var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value; 
    length++; 
  };

  someInstance.dequeue = function() {
    // loop through storage
    // store current value into variable temp
    if ( length > 0) {
      var temp;
      for (var i = 0; i < length; i++) {
        // if key equals 0
        if (i === 0) {
          // store first value in temp
          temp = storage[i];
        }
        // if key = length -1
        if ( i === (length - 1)) {
          // delete key
          delete storage[i];
        }
        // storage[i] = storage[i +1]
        storage[i] = storage[i +1]
      }
      // decrement length
        length--;
      // return temp
      return temp;
    }
  };

  someInstance.size = function() {
    return length; 
  };

  return someInstance;
};
