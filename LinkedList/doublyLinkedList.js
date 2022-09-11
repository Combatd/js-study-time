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
}

/*
let first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
first.next.next = new Node(14);
first.next.next.prev = first.next;
*/

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push("Last Item");
console.log(list);