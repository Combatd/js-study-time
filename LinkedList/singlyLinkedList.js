class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /*
        #push
        accepts a value
        creates a new node using value passed to function
        if no new head property, set head and tail to be new node
        otherwise, next property of tail should be new node, and tail should be new node
        increment length by 1
        return the linked list
    */
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node; // it could also be 'this.head' since it points to the node in memory
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    /*
    #pop
    If there are no nodes in the list, returns undefined
    Loop through the list until the tail is reached
    Set the next property of the 2nd to last node to be null
    Set the tail to be the 2nd to last node
    Decrement the length of the list by 1
    Return the value of the node removed
    */
   pop = function() {
       if (!this.head) {
           return undefined;
       }
       let current = this.head;
       let newTail = current; // starts at the head
       while(current.next) {
            newTail = current;
            current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if (this.length === 0) {
            this.head = null;
            this.tail = null;
       }
       return current;
   }

   /*
    #shift
    If there are no nodes, return undefined
    Store the current head property in a variable
    Set the head property to be the current head's next property
    Decrement the length by 1
    return the value of the head removed
   */
   shift() {
       if (!this.head) {
           return undefined;
       }
       let node = this.head;
       this.head = node.next;
       this.length--;
       if (this.length === 0) {
           this.tail = null;
       }
       return node;
   }

    /*
     #unshift
     Function accepts a value
     Create a new node using value argument
     If there is no head property on the list, set the head and tail to be the newly created node
     Otherwise, set the newly created node's next property to be the current head property on the list
     Set the head property on the list to be that newly created node
     Increment the length of the list by 1
     Return the linked list
    */
    unshift = function (value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

   /*
    #get
    This function should accept an index
    If the index is less than zero or greater than or equal to the length of the list, return null
    Loop through the list until you reach the index and return the node at that specific index
   */
  get = function(index) {
      if (index < 0 || index >= this.length) {
          return null;
      }
      let counter = 0;
      let current = this.head;
      while (counter != index) {
          current = current.next;
          counter++;
      }
      return current;
  }
}

let first = new Node('Hi');
let list = new SinglyLinkedList();
list.push('Hi');
list.push(99);
list.push('!');
console.log(list.head);
console.log(list.tail);
list.traverse();
// list.pop();
console.log(list.shift());
console.log(list.get(1));