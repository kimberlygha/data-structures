var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // call tree and pass in value and push to the children array  
  this.children.push(Tree(value));
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