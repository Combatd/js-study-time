class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  bubbleUp(element) {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  extractMax = function() {
    const max = this.values[0]; // the root
    const end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max; // the removed root
  }

  sinkDown(index = 0) {
    const length = this.values.length;
    const element = this.values[index];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx = length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx = length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
          ) {
          swap = rightChildIdx;
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
