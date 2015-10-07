var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value; 
    size++; 
  };

  someInstance.dequeue = function() {
    // loop through storage
    // store current value into variable temp
    var 
    for (var i = 0; i < size; i++) {
      // if key equals 0
      if (i === 0) {

      }
      // if key = length -1
        // delete key
      // storage[i] = storage[i +1]
      
    }
    // decrement length
    // return temp
  };

  someInstance.size = function() {
    return size; 
  };

  return someInstance;
};

//like a double stack where you can reverse the stack in order to access the last item via a shift
