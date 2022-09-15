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