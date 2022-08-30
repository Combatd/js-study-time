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
}

let first = new Node('Hi');
let list = new SinglyLinkedList();
list.push('Hi');
list.push(99);
console.log(list.head);
console.log(list.tail);