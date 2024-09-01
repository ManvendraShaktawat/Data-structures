class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper methods to navigate the heap
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  swapNodes(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // Insert a new element into the heap
  enqueue(element, priority) {
    const node = { element, priority };
    this.heap.push(node);
    this.bubbleUp();
  }

  // Remove and return the highest priority element
  dequeue() {
    if (this.heap.length === 1) return this.heap.pop().element;
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root.element;
  }

  // Maintain heap property after insertion
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index].priority <= this.heap[parentIndex].priority) break;
      this.swapNodes(index, parentIndex);
      index = parentIndex;
    }
  }

  // Maintain heap property after removal
  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(idx);
      const rightChildIndex = this.getRightChildIndex(idx);
      let swapIdx = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex].priority > element.priority) {
          swapIdx = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        let nodeToCompare = swapIdx === null ? element : this.heap[swapIdx];
        if (this.heap[rightChildIndex].priority > nodeToCompare.priority) {
          swapIdx = rightChildIndex;
        }
      }

      if (swapIdx === null) break;
      this.swapNodes(idx, swapIdx);
      idx = swapIdx;
    }
  }

  // Peek at the highest priority element without removing it
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0].element;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

export default PriorityQueue;
