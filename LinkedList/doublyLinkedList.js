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
console.log(list.unshift('Hagrid'));