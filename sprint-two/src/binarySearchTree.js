var BinarySearchTree = function(value) {
  // create a new object inheriting from methodsObject
  var binaryTree = Object.create(methodsObject);
  // declare a value key and assign to value
  binaryTree.value = value;
  // declare a left key and assign to null
  binaryTree.left = null;
  // declare a right key and assign to null
  binaryTree.right = null;
  // return the object
  return binaryTree;
};

// create methodsObject
var methodsObject = {};
  // declare insert method that accepts value parameter
methodsObject.insert = function(value) {
  // if value is greater than value of current node
  if ( value > this.value) {
    // if current node's right key is null
    if (this.right === null) {
      // set the node's right key to BinarySearchTree and pass in value
      this.right = BinarySearchTree(value);
    } else {
    // else
      // call insert on current node's right key
      this.right.insert(value);
    }
  } else {
  // else
    // if current node's left key is null
    if ( this.left === null) {
      // set the node's left key to BinarySearchTree and pass in value
      this.left = BinarySearchTree(value);
    } else {
    // else
      // call insert on current node's left key
      this.left.insert(value);
    }
  }
};

// declare contains method that accepts value parameter
methodsObject.contains = function(value) {
  // if current node's value is equal to value
  if (this.value === value) {
    // return true
    return true;
  } else if (value > this.value) {
  // else if value is greater than current node's value
    // if current node's right key is null
    if (this.right === null) {
      // return false
      return false;
    }
    // return contains on node's right key
    return this.right.contains(value);
  } else {
  // else
    // if current node's left key is null
    if (this.left === null) {
      // return false
      return false;
    }
    // return contain on node's left key
    return this.left.contains(value);
  }
  
};

// declare depthFirstLog method that accepts callback parameter
methodsObject.depthFirstLog = function(cb) {
  // invoke callback and pass in current node's value
  cb(this.value);
  // if current node's right key is not null
  if (this.right !== null) {
    // invoke depthFirstLog on current node's right key
    this.right.depthFirstLog(cb);
  }
  // if current node's left key is not null
  if (this.left !== null) {
    // invoke depthFirstLog on current node's left key
    this.left.depthFirstLog(cb);
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
