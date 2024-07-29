class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  clear() {
    this.heap = [];
  }
}

function solution(scoville, K) {
  var answer = 0;
  const minHeap = new MinHeap();

  scoville.forEach((s) => minHeap.insert(s));

  while (minHeap.size() > 1) {
    if (minHeap.peek() >= K) {
      return answer;
    }

    const num1 = minHeap.remove();
    const num2 = minHeap.remove();
    const newScoville = num1 + num2 * 2;

    minHeap.insert(newScoville);
    answer += 1;
  }

  return minHeap.peek() >= K ? answer : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 출력: 2
