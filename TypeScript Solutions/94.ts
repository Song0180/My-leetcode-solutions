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

// recursive solution
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const helper = (root: TreeNode | null): void => {
    if (!root) {
      return;
    }
    if (root.left) {
      helper(root.left);
    }
    res.push(root.val);
    if (root.right) {
      helper(root.right);
    }
  };
  helper(root);
  return res;
}

function inorderTraversal2(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop() as TreeNode;
    res.push(root.val);
    root = root.right;
  }
  return res;
}
