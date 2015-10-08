var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;

  //extend defined in other file
  
  return someInstance;
};

var queueMethods = {

  enqueue : function(value) {
    this.storage[this.length] = value; 
    this.length++; 
  },

  dequeue : function() {
    // loop through storage
    // store current value into variable temp
    if ( this.length > 0) {
      var temp;
      for (var i = 0; i < this.length; i++) {
        // if key equals 0
        if (i === 0) {
          // store first value in temp
          temp =this.storage[i];
        }
        // if key = length -1
        if ( i === (this.length - 1)) {
          // delete key
          delete this.storage[i];
        }
        // storage[i] = storage[i +1]
        this.storage[i] = this.storage[i +1]
      }
      // decrement length
        this.length--;
      // return temp
      return temp;
    }
  },

  size : function() {
    return this.length; 
  }

};