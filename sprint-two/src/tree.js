var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = []; 
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  // call tree and pass in value and push to the children array  
  this.children.push(child);
};

treeMethods.contains = function(target, state) {
  // if state is not defined set to equal false 
  state = state || false; 
  // check to see if this.value is equal to target 
  if(this.value === target){
    // set variable to true
    state = true; 
  }
  // if there are children 
  if(this.children.length > 0){
    // iterate over children 
    for(var i=0; i<this.children.length; i++){
      // call contains on each child 
      state = this.children[i].contains(target,state);
    }
  }
  // return state
  return state; 
};

//.removeFromParent() method, which disassociates the tree with its parent (in both directions)
treeMethods.removeFromParent = function() {
  // iterate over children from parent of this node
  for (var i = 0; i < this.parent.children.length; i++) {
    // if the value is equal to this node
    if (this.parent.children[i] === this) {
      // splice children array to remove current node
      this.parent.children.splice(i,1);
    }
  }
  // set parent of this node to null
  this.parent = null;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  add - constant
  contains - minimum linear bc there's a for loop (Fawn: quadratic?)
 */
// Note: Functional - shared pattern