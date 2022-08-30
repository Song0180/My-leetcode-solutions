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

// recursive
// Time: O(n)
// Space: O(n)
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  root.left = invertTree(root.left);
  root.right = invertTree(root.right);
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}
