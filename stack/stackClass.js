class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    push = function(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode; // the new node is now at the front
            this.first.next = temp; // the old beginning
        }
        return ++this.size; // return size before incrementing by 1
    }

    pop = function() {
        if (!this.first) {
            return null;
        }
        let temp = this.first;
        if(this.first === this.last) {
            this.last - null; // if only 1 node, make sure we also update last
        }
        this.first = this.first.next; // if there is nothing next, it is null
        this.size -= 1; // reduce size by 1
        return temp.value;
    }

}

let testNode = new Node('Google');
let testStack = new Stack(testNode);
testStack.push("Instagram")
testStack.push("YouTube")
console.log(testStack.pop()); // => YouTube