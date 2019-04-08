/**
 * AVL Tree implementation
 *
 * Reference:
 * Youtube: https://www.youtube.com/watch?v=rbg7Qf8GkQ4
 * GeeksForGeeks: https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;

    // For problem 129
    this.size = 0;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    if (!node) return 0;
    return node.height;
  }

  size(node) {
    if (!node) return 0;
    return node.size;
  }

  max(a, b) {
    return a > b ? a : b;
  }

  rightRotate(y) {
    const x = y.left;
    const t2 = x.right;

    x.right = y;
    y.left = t2;

    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    // For problem 129
    y.size = this.size(y.left) + this.size(y.right) + 1;
    x.size = this.size(x.left) + this.size(x.right) + 1;

    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const t2 = y.left;

    y.left = x;
    x.right = t2;

    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    // For problem 129
    y.size = this.size(y.left) + this.size(y.right) + 1;
    x.size = this.size(x.left) + this.size(x.right) + 1;

    return y;
  }

  getBalance(node) {
    if (!node) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  // counts and index for problem 129
  insertHelper(node, val, counts, index) {
    if (!node) return new Node(val);
    if (val < node.val) {
      node.left = this.insertHelper(node.left, val, counts, index);
    } else if (val > node.val) {
      node.right = this.insertHelper(node.right, val, counts, index);

      // For problem 129
      // Update count of smaller elements for val
      counts[index] = counts[index] + this.size(node.left) + 1;
    } else {
      return node;
    }

    node.height = 1 + this.max(this.height(node.left), this.height(node.right));
    node.size = 1 + this.size(node.left) + this.size(node.right);

    const balance = this.getBalance(node);

    // Left left case
    if (balance > 1 && val < node.left.val) return this.rightRotate(node);

    // Right right case
    if (balance < -1 && val > node.right.val) return this.leftRotate(node);

    // Left right case
    if (balance > 1 && val > node.left.val) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right left case
    if (balance < -1 && val < node.right.val) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // counts and index for problem 129
  insert(val, counts, index) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      this.root = this.insertHelper(this.root, val, counts, index);
    }
    return this.root;
  }

  preOrder(node) {
    if (node) {
      console.log(node.val);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

module.exports = AVLTree;
