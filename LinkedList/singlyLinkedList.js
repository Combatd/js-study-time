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

  /*
    #set
    This function should accept an index and a value
    Use get function to find the specific node
    If the node is not found, return false
    If the node is found, set the value of that node to be the vlaue passed to the function and return true
  */
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
        foundNode.value = value;
        return true;
    } else {
        return false;
    }
  }

  /*
    #insert
    If the index is less than 0 or greater than the length, return false
    If the index is the same as the length, push a new node to the end of the list
    If the index is 0, unshift a new node to the start of the list
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the new node
    Set the next property on the new node to be the previous next
    Increment the length
    Return true
  */
  insert = function(index, value) {
    if (index < 0 || index > this.length) {
        return false;
    } else if (index === this.length) {
        this.push(value);
    } else if (index === 0) {
        this.unshift(value);
    } else {
        let prevNode = this.get(index - 1);
        let newNode = new Node(value);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp; // the old prev.next node
    }
      this.length++;
      return true;
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
console.log(list.set(1, '?'));
console.log(list.get(1));
console.log(list.insert(2, 'burger'));
console.log(list.traverse(), " <- traversal after inserting sandwich");
console.log(list.insert(2, 'sandwich'));
console.log(list.traverse(), " <- traversal after inserting sandwich");
