var DoubleLinkedList = function() {
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
      // using the value of tail as a key on list, access the "next" property, and set it to node
      list[list.tail.value]["next"] = node;
      // set the previous property of current node to the last value of tail
      node.previous = list[list.tail.value];
      // set tail to node
      list.tail = node; 

      if (list.head.next === null) {
        list.head.next = node;
      }

    }
  };

  list.removeHead = function() {
    // declare variable that stores list.head.value
    var headValue = list.head.value;
    var headNode = list.head.next;
    // delete list.headValue
    delete list[list.head];
    // set list.head to value of list with a key of list.head.next
    list.head = headNode;
    // return variable
    return headValue;
  };

  list.contains = function(target, node) {

    // if node is not defined, give it a value of list.head
    node = node || list.head;
    // check if node.value equals target
    if (node.value === target) {
      // return true
      return true;
    }
    // check if node.next equals null
    if (node.next === null) {
      // return false
      return false;
    }
    // call the function again on the next object
    return list.contains(target, node.next);

  };
  //.addToHead() method which takes a value and adds it to the front of the list.
  list.addToHead = function(value) {
    // create a new node with value
    var node = Node(value);
    // set the node's next property to head
    node.next = list.head;
    // set the head's previous property to the node
    list.head.previous = node;
    // set head to node
    list.head = node;
  };
  // .removeTail() method which removes the last node from the list and returns its value.
  list.removeTail = function(){
    // save value of tail into variable called removed
    var removed = list.tail.value;
    // set next to null on tail's previous 
    list.tail.previous.next = null;
    // set tail to tails' previous
    list.tail = list.tail.previous;
    // delete tail???
    // return removed
    return removed;    
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  Contains - 1 recursion - O(n)
  Remove - O(1)
  Add - O(1)
 */
