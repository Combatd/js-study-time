class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    /*
      #push
      Create a new node with the value
      If the head property is null set the head and tail to be the newly created node
      If not, set the next property on the tail to be that node
      Set the previous property on the newly created node to be the tail
      Set the tail to be the newly created node
      Increment the length
      Return the Doubly Linked List
    */
   push = function(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
   }
   
   /*
    #pop
    If there is no head, return undefined
    Store the current tail in a variable to return later
    If the legnth is 1, set the head and tail to be null
    Update the tail to be the previous Node
    Set the newTail's next to be null
    Decrement the length
    Return the value removed
   */
   pop() {
    if (!this.head) {
      return undefined;
    }
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null; // the old tail
    }
    this.length--;
    return removedNode;
   }

   /*
    #shift
    Removes a node from the beginning of a Linked List
    If length is 0, return undefined
    Store the current head property in a variable oldHead
    If the length is 1
      set the head to be null
      set the tail to be null
    Update the head to be the next of the oldHead
    Set the head's prev property to null
    Set the oldHead next to null
    Decrement the length
    Return old head
   */
  shift = function() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  /*
    #unshift
    Adds a node to the beginning of a Linked List

    Create a new node with the value that's passed in
    If the length is 0
      Set the head to be the new node
      Set the tail to be the new node
    Otherwise
      Set the prev property on the head of the list to be the newNode
      Set the next property on the newNode to be the head property
      Update the head to be the newNode
    Increment the length
    Return the list
  */
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head; // The current head will become the 2nd node
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /*
    #get
    Accesses a node in a DoublyLinkedList by its position
    Takes an index and returns a node at that position

    If the index is less than 0 or greater or equal to the length, return null
    If the index is less than or equal to half the length in the list
      Loop through the list starting from the head and loop towards the middle
      Return the node once it is found
    If the index is greater than half the length of the list
      Loop through the list starting from the tail and loop towards the middle
      Return the node once it is found
  */
  get = function(index) {
    if(index < 0 || index >= this.length) {
      return undefined;
    }
    let midPoint = Math.floor(this.length / 2);
    if (index <= midPoint) {
      let count = 0;
      let currentNode = this.head;
      while(count !== index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    } else if (index > midPoint) {
      let count = this.length - 1;
      let currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode;
    }
  }

  /*
    #set
    Create a variable which is the result of the get method at the index passed to the function
      If the get method returns a valid node, set the value of that node to be the value passed to the function
      Return true
    Otherwise, return false
  */
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
  /*
    #insert
    Adds a node in a DoublyLinkedLIst by a certain position

    If the index is less than zero or greater than or equal to the length return false
    If the index is 0, unshift
    If the index is the same as the length, push
    Use the get method to access the index -1
    Set the next and prev properties on the correct nodes to link everything together
    Increment the length by 1
    Return true
  */
  insert = function(index, val) {
    if (index < 0 || index > this.lnegth) {
      return false;
    }
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    
    this.length++;
    return true;
  }
}

/*
let first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
first.next.next = new Node(14);
first.next.next.prev = first.next;
*/

let list = new DoublyLinkedList();
// list.push(99);
// list.push(100);
// list.push("Last Item");

list.push('Harry');
list.push('Ron');
list.push("Hermione");
console.log(list);

// console.log(list.pop(), " <- #pop");
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
//console.log(list.unshift('Hagrid'));
console.log(list.get(0), ' <-- get');
console.log(list.get(1), ' <-- get');
console.log(list.get(2), ' <-- get 2');

console.log(list.set(2, 'HERMIONE'));
console.log(list.get(2), ' <-- get 2');
console.log(list.insert(1, 'Tonks'), ' <-- insert')
console.log(list.get(1));






/*
set(index, val) {
  if (index < 0 || index >= this.length) {
    return false;
  }
  let midPoint = Math.floor(this.length / 2);
  if (index <= midPoint) {
    let count = 0;
    let currentNode = this.head;
    while(count !== midPoint) {
      if (count === index) {
        currentNode.val = val;
      }
      currentNode = currentNode.next;
      count++;
    }
  } else if (index > midPoint) {
    let count = this.length - 1;
    let currentNode = this.head;
    while (count !== midPoint) {
      if (count === index) {
        currentNode.val = val;
      }
      currentNode = currentNode.prev;
      count--;
    }
  }
  return false;
}
*/