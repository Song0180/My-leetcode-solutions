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

// iterative O(n)
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const queue = [root.left, root.right];
  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();
    if (left && right) {
      if (left.val !== right.val) {
        return false;
      } else {
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
      }
    } else if (!left && !right) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// recursive
function isSymmetric2(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    return (
      left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left)
    );
  };

  return helper(root.left, root.right);
}
