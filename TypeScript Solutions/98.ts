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

/**
 * 
 * A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

function isValidBST(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity);
}

const helper = (root: TreeNode | null, min: number, max: number) => {
  if (!root) {
    return true;
  }
  if (root.val >= max || root.val <= min) {
    return false;
  }
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};

// iterative inorder traversal
function isValidBST2(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const stack: TreeNode[] = [];
  let prev: TreeNode | null = null;
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop() as TreeNode;
    if (prev && root.val <= prev.val) {
      return false;
    }
    prev = root;
    root = root.right;
  }
  return true;
}
