/**
 * Definition for a binary tree node.
 *
 */

// O(1) time for next & hasNext, O(n) space
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BSTIterator {
  stack: TreeNode[] = [];
  constructor(root: TreeNode) {
    this.fillStack(root);
  }

  next(): number {
    return this.stack.pop().val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  fillStack(root: TreeNode) {
    if (root.right) {
      this.fillStack(root.right);
    }

    this.stack.push(root);

    if (root.left) {
      this.fillStack(root.left);
    }
  }
}

// average O(1) time for next & hasNext, O(h) space, h is the height of the tree
class BSTIterator2 {
  stack: TreeNode[] = [];
  constructor(root: TreeNode) {
    this.fillStack(root);
  }

  next(): number {
    const cur = this.stack.pop();
    this.fillStack(cur?.right);
    return cur.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  fillStack(node: TreeNode) {
    while (node !== null) {
      this.stack.push(node);
      node = node.left;
    }
  }
}
