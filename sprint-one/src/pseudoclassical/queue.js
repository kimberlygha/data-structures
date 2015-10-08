var Queue = function() {

  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value; 
  this.length++; 
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.length; 
};
//Fawn's note: In pseudoclassical pattern, you should not override the prototype object, so instead of setting it to a new object, set just the new properties.