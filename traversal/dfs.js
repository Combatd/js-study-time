class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = function(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root; // just like how it started with this.head in Linked List
      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
              current.right = newNode;
              return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;
    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

/*
  #BFS
  Create a Queue (this can be an array) and a variable to store the values of nodes visited
  Place the root node in the Queue
  Loop as long as there is anything in the queue
    Dequee a node from the queue and push the value of the node into the variable that stores the nodes
    If there is a left property on the node dqueued - add it to the queue
    If there is a right property on the node dequeued - add it to the queue
  Return the variable that stores the values
*/
  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  /*
    #DFSPreOrder - root node is first before left and right
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
      Push the value of the node to the variable that stores the values
      If the node has a left property, call the helper function with the left property on the node
      If the node has a right property, call the helper function with the right property on the node
    Invoke the helper function with the current variable
    Return the array of values
  */
  DFSPreOrder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  /*
    #DFSPostOrder - root node is last after left and right
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
      If the node has a left property, call the helper function with the left property on the node
      If the node has a right property, call the helper function with the right property on the node
      Push the value of the node to the variable that stores the values
      Invoke the helper function with the current variable
  */
  DFSPostOrder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }

  /*
    #DFSInOrder - root node is in the middle, after left but before right
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
      If the node has a left property, call the helper function with the left property on the node
      Push the value of the node to the variable that stores the values
      If the node has a right property, call the helper function with the right property on the node
      Invoke the helper function with the current variable
  */
  DFSInOrder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.DFSPreOrder(), ' <-- Depth First Search Pre Order');
console.log(tree.DFSPostOrder(), ' <-- Depth First Search Post Order');
console.log(tree.DFSInOrder(), ' <-- Depth First Search In Order');