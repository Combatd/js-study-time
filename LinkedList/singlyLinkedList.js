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
    */
    push(value) {

    }
}

let first = new Node('Hi');
let list = new SinglyLinkedList();