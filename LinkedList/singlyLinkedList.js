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
}

let first = new Node('Hi');
let list = new SinglyLinkedList();
list.push('Hi');
list.push(99);
list.push('!');
console.log(list.head);
console.log(list.tail);
list.traverse();
list.pop();