class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // add to the end
    enqueue = function(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size += 1;
        return this.size;
    }

    // remove from the beginning
    dequeue = function() {
        if (!this.first) {
            return null;
        }
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return temp.value;
    }
}

let testQueue = new Queue();
testQueue.enqueue('Google');
testQueue.enqueue('Instagram');
testQueue.enqueue('YouTube');

console.log(testQueue.dequeue()); // => Google
