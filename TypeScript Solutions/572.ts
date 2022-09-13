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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root || !subRoot) {
    return false;
  }

  return (
    isTreeSame(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

const isTreeSame = (root1: TreeNode | null, root2: TreeNode | null) => {
  if (!root1 && !root2) {
    return true;
  } else if (root1 && root2) {
    return (
      root1.val === root2.val &&
      isTreeSame(root1.left, root2.left) &&
      isTreeSame(root1.right, root2.right)
    );
  } else {
    return false;
  }
};
