class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BTS {
  root: TreeNode<number> | null = null;

  // O(log n) muvozanatli daraxtda
  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value < value) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        return;
      }
    }
  }

  // O(log n)
  search(value: number): boolean {
    let current = this.root;

    while (current !== null) {
      if (current.value === value) return true;
      else if (current.value < value) current = current.right;
      else current = current.left;
    }

    return false;
  }

  // O(log n)
  findMin(): number | null {
    let current = this.root;

    while (current !== null) {
      if (current.left === null) {
        return current.value;
      } else {
        current = current.left;
      }
    }

    return null;
  }

  // O(log n)
  findMax(): number | null {
    let current = this.root;

    while (current !== null) {
      if (current.right === null) {
        return current.value;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  // O(n)
  height(): number {
    const measure = (node: TreeNode<number> | null): number => {
      if (node === null) return -1;

      const leftHeight = measure(node.left);
      const rightHeight = measure(node.right);

      return 1 + Math.max(leftHeight, rightHeight);
    };
    return measure(this.root);
  }
}

const x = new BTS();
x.insert(28);
x.insert(15);
x.insert(60);
x.insert(3);
x.insert(41);
x.insert(77);
const r = x.findMin();
const r2 = x.findMax();
const h = x.height();
console.log(r, r2, h);
