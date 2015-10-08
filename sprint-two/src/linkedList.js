var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // call Node(value) set to var called node
    var node = Node(value);
    // if list = {}
    if (list.head === null) {
      // set list = node;
      list[value] = node; 
      // set list.head = node;
      list.head = node; 
      // set list.tail = node;
      list.tail = node; 
    // else
    } else {
      // using the value of tail as a key on list, access the "next" property, and set it to value
      list[list.tail.value]["next"] = value;
      // create a new key that's equal to value and set it to node
      list[value] = node;
      // set tail to node
      list.tail = node; 

      if (list.head.next === null) {
        list.head.next = value;
      }

    }
  };

  list.removeHead = function() {
    // declare variable that stores list.head.value
    var headValue = list.head.value;
    // set list.head to value of list with a key of list.head.next
    list.head = list[list.head.next];
    // delete list.headValue
    delete list[headValue];
    // return variable
    return headValue;
  };

  list.contains = function(target) {
    // create a variable called result and set to false 
    var result = false; 
    // iterate through list 
    for (var key in list){
      // if key does not equal head or tail 
      if (key !== 'head' && key !== 'tail'){
        // check if current element's value equals target 
        if (list[key]['value'] === target){
          // return true
          result = true; 
        }
      }
    }
    // return result
    return result; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
