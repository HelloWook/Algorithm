// make bst with js

class Node {
  constructor(value, parent) {
    this.parent = parent;
    this.right = null;
    this.left = null;
    this.value = value;
  }

  // 노드를 삽입한다.
  insert(value) {
    // 현재 값이 더 클 때 -> 왼쪽 삽입
    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value, this);
      }
    }
    // 현재 값이 더 작을 때 -> 오른쪽 삽입
    else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value, this);
      }
    }

    return this;
  }

  // 중위 순회 출력 (왼쪽 -> 현재 -> 오른쪽)
  printInOrder() {
    if (this.left) {
      this.left.printInOrder();
    }

    process.stdout.write(this.value + " -> ");

    if (this.right) {
      this.right.printInOrder();
    }

    return this;
  }

  // 최소값 찾기
  findMin() {
    if (!this.left) {
      return this;
    }
    return this.left.findMin();
  }

  // 값으로 노드 찾기
  search(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value) {
      // 노드 값보다 작을때 -> 왼쪽 순회
      // this.left가 없으면 null 반환
      if (!this.left) return null;
      return this.left.search(value);
    } else {
      // 노드 값보다 클때 -> 오른쪽 순회
      // this.right가 없으면 null 반환
      if (!this.right) return null;
      return this.right.search(value);
    }
  }

  // 제거하는 함수
  delete(value) {
    const node = this.search(value);
    // 노드가 없으면 그냥 종료
    if (!node) return this;

    const parent = node.parent;

    // 루트 노드인 경우 (부모가 없는 경우) 특별 처리
    if (!parent) {
      return this._deleteRoot(node);
    }

    // 노드가 리프 노드일 경우
    if (!node.left && !node.right) {
      if (parent.left === node) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // 노드가 자식 하나만 있을 경우
    else if ((node.left && !node.right) || (!node.left && node.right)) {
      const child = node.left || node.right;

      if (parent.left === node) {
        parent.left = child;
      } else {
        parent.right = child;
      }
      child.parent = parent;
    }
    // 삭제할 노드에 자식이 둘 있는 경우
    else if (node.left && node.right) {
      // 오른쪽 서브트리에서 가장 작은 값(후계자) 찾기
      const successor = node.right.findMin();

      // 후계자의 값을 삭제할 노드의 값으로 복사
      node.value = successor.value;

      // 후계자 노드 삭제
      if (successor.parent.left === successor) {
        successor.parent.left = successor.right;
      } else {
        successor.parent.right = successor.right;
      }

      // 후계자의 오른쪽 자식이 있다면, 그 부모를 업데이트
      if (successor.right) {
        successor.right.parent = successor.parent;
      }
    }

    return this;
  }

  // 루트 노드 삭제 처리를 위한 헬퍼 메서드
  _deleteRoot() {
    // 자식이 없는 경우 (루트 노드만 있는 경우)
    if (!this.left && !this.right) {
      return null; // 트리 전체가 삭제됨
    }

    // 자식이 하나만 있는 경우
    if (!this.left) {
      this.right.parent = null;
      return this.right;
    }
    if (!this.right) {
      this.left.parent = null;
      return this.left;
    }

    // 자식이 둘 다 있는 경우
    // 오른쪽 서브트리의 가장 작은 값(후계자) 찾기
    const successor = this.right.findMin();

    // 후계자의 값을 루트에 복사
    this.value = successor.value;

    // 후계자 노드 제거 처리
    if (successor.parent.left === successor) {
      successor.parent.left = successor.right;
    } else {
      successor.parent.right = successor.right;
    }

    // 후계자의 오른쪽 자식이 있다면, 그 부모를 업데이트
    if (successor.right) {
      successor.right.parent = successor.parent;
    }

    return this;
  }
}

// BST 클래스 (사용 편의성을 위해)
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 값 삽입
  insert(value) {
    if (!this.root) {
      this.root = new Node(value, null);
      return this;
    }

    this.root.insert(value);
    return this;
  }

  // 중위 순회 출력
  printInOrder() {
    if (!this.root) {
      console.log("빈 트리임");
      return this;
    }

    this.root.printInOrder();
    console.log("end");
    return this;
  }

  // 값 검색
  search(value) {
    if (!this.root) return null;
    return this.root.search(value);
  }

  // 값 삭제
  delete(value) {
    if (!this.root) return this;

    // 루트 노드를 삭제하는 경우, 새 루트를 설정해야 함
    const newRoot = this.root.delete(value);
    if (newRoot !== this.root) {
      this.root = newRoot;
    }

    return this;
  }
}

// 사용 예시
const bst = new BinarySearchTree();
bst
  .insert(50)
  .insert(30)
  .insert(70)
  .insert(20)
  .insert(40)
  .insert(60)
  .insert(80);

console.log("중위 순회 결과:");
bst.printInOrder();

console.log("\n40 삭제 후:");
bst.delete(40);
bst.printInOrder();

console.log("\n50(루트) 삭제 후:");
bst.delete(50);
bst.printInOrder();
