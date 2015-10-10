

// ------------------------ Pseudoclassical pattern
// Instantiate a new graph
var Graph = function() {
  // this.storage is an empty array 
  this.storage = []; 
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // declare an array
  var tuple = [];  
  // set array[0] to the node 
  tuple[0] = node; 
  // set array[1] to an empty array 
  tuple[1] = []; 
  // push the array into storage 
  this.storage.push(tuple);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate over each element of storage 
  for(var i=0; i<this.storage.length; i++){
    // for each element check the index 0 and see if it matches node 
    if(this.storage[i][0] === node){
      // return true 
      return true; 
    }  
  }
  // return false 
  return false; 
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate over each element of storage 
  for(var i=0; i<this.storage.length; i++){
    // for each element check storage[0] to see if it equals node
    var storageEl = this.storage[i]; 
    if(storageEl[0] === node){
      // declare a temporary variable called links to store edges 
      var links = storageEl[1];
      // splice the storage array to remove the current element
      this.storage.splice(i,1);
      // break out of iterations
      break; 
    }
  }

  // (remove edges)  
  // iterate through links
  for ( var i = 0; i < links.length; i++) {
    // for current element, remove edges toNode
        this.removeEdge(links[i], node);
  }

// iterate over elements in storage array 
// for(var i=0; i<this.storage.length; i++){
//     var storageEl = this.storage[i];
//     // for each element in links 
//     for(var i=0; i<links.length; i++){
//       // check to see if the current element[0] in storage equals the current element in links
//       if(storageEl[0] === links[i]){
//         // if true, loop through edges in current element of storage
//         for(var i=0; i<storageEl[1]; i++){
//           // check to see if current element of edges matches current element of links
//           if(storageEl[1][i] === node){
//             // if true, splice current element[1] to remove this edge 
//             storageEl[1].splice(i,1);
//           }
//         }
//       }
//     }
//   }


};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // iterate over each element in storage 
  for(var i = 0; i < this.storage.length; i++){
    // check value to see if it matches fromNode
    if(this.storage[i][0] === fromNode){
      // iterate over the links for the current element
      for(var j=0; j<this.storage[i][1].length; j++){
        // check if current element in links equals toNode  
        if(this.storage[i][1][j] === toNode){
          // return true 
          return true; 
        }
      }
    }
  }
  //return false 
  return false; 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // iterate over each element in storage 
  for(var i=0; i<this.storage.length; i++){
    // if current element of storage equals fromNode 
    if(this.storage[i][0] === fromNode){
      // (Note: assuming toNode is not already there)
      // push toNode to its links 
      this.storage[i][1].push(toNode);
    }
    // if current element of storage equals toNode
    if(this.storage[i][0] === toNode){
      // push fromNode to its links 
      this.storage[i][1].push(fromNode);
    }
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(from, to) {
  var that = this;
  // declare a function that removes edges from two nodes 
  var removeLinks = function(fromNode, toNode){
    // iterate over storage
    for (var i = 0; i< that.storage.length; i++) {
      // if the value of the current element of storage (this.storage[i][0]) equals fromNode
      if (that.storage[i][0] === fromNode) {
        // iterate over its links
        for (var j = 0; j < that.storage[i][1].length; j++) {
          // if the link equals toNode
          if (that.storage[i][1][j] === toNode) {
            // splice links to remove toNode
            that.storage[i][1].splice(j,1);
            console.log(that.storage[i][1]);
          }
        }
      }
    }
  };

  removeLinks(to, from);  
  removeLinks(from, to);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over storage 
  for(var i=0; i<this.storage.length; i++){
    // call cb for each element  
    cb(this.storage[i][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode - constant
 contains - linear
 removeNode - linear
 hasEdge - linear (mn)
 addEdge - linear
 removeEdge - linear (mn)?
 */


