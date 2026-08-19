class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BST {
  private root: TreeNode<number> | null = null;

  // O(log n) balanced tree, O(n) eng yomon holatda (skewed tree)
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

  // O(log n)  balanced tree, O(n) eng yomon holatda
  search(value: number): boolean {
    let current = this.root;

    while (current !== null) {
      if (current.value === value) return true;
      else if (current.value < value) current = current.right;
      else current = current.left;
    }

    return false;
  }

  // O(log n)  balanced tree, O(n) eng yomon holatda
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

  // O(log n) balanced tree, O(n) eng yomon holatda
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

  // O(n) — har bir node bir marta ko'riladi.
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

const x = new BST();
x.insert(28);
x.insert(15);
x.insert(60);
x.insert(3);
x.insert(41);
x.insert(77);
console.log(x.findMin(), x.findMax(), x.height()); // 3 77 2
console.log(x.search(41), x.search(42)); // true false

// Skewed tree — bir tomonga cho'zilgan daraxt linked list'ga aylanadi va search O(log n) emas, O(n) bo'ladi.
const skewed = new BST();
[1, 2, 3, 4, 5].forEach((n) => skewed.insert(n));
console.log(skewed.height()); // 4 — muvozanatli bo'lganda 2 bo'lardi
