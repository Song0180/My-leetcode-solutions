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
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return root;
  }

  if (root.val === p!.val || root.val === q!.val) {
    return root;
  }

  if (root.left) {
    const numOfTargets = count(root.left, p, q);
    if (numOfTargets === 2) {
      return lowestCommonAncestor(root.left, p, q);
    } else if (numOfTargets === 1) {
      return root;
    }
  }

  if (root.right) {
    const numOfTargets = count(root.right, p, q);
    if (numOfTargets === 2) {
      return lowestCommonAncestor(root.right, p, q);
    } else if (numOfTargets === 1) {
      return root;
    }
  }

  return null;
}

const count = (
  startNode: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): number => {
  if (!startNode) {
    return 0;
  }
  let sum = 0;

  if (startNode.val === p!.val || startNode.val === q!.val) {
    sum++;
  }

  if (startNode.left) {
    sum += count(startNode.left, p, q);
  }

  if (startNode.right) {
    sum += count(startNode.right, p, q);
  }

  return sum;
};

// a much simpler iterative solution
function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // checking if the 2 nodes are in the same subtree
  // since bst is ordered and node is always larger than left & smaller than right
  while ((root!.val - p!.val) * (root!.val - q!.val) > 0) {
    // as long as 2 nodes are in the same subtree, move on
    // otherwise the root must be the lca
    // p.val < root.val means root must have the left children
    // vice versa
    root = p!.val < root!.val ? root?.left! : root?.right!;
  }
  return root;
}

// improved recursive solution
function lowestCommonAncestor3(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // if in the same subtree
  if ((root!.val - p!.val) * (root!.val - q!.val) > 0) {
    // if in the left subtree
    if (p!.val < root!.val) {
      return lowestCommonAncestor3(root!.left, p, q);
    } else {
      return lowestCommonAncestor3(root!.right, p, q);
    }
  }
  return root;
}
