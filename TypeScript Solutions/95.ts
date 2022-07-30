/**
 * Definition for a binary tree node.
 *
 *
 */
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
function generateTrees(n: number): Array<TreeNode | null> {
  const helper = (nums: number[]): Array<TreeNode | null> => {
    const res: Array<TreeNode | null> = [];
    if (nums.length === 0) {
      return [null];
    }

    for (let i = 0; i < nums.length; i++) {
      const lefts = helper(nums.slice(0, i));
      const rights = helper(nums.slice(i + 1));

      for (const left of lefts) {
        for (const right of rights) {
          const root = new TreeNode(nums[i]);
          root.left = left;
          root.right = right;
          res.push(root);
        }
      }
    }
    return res;
  };

  return helper([...Array(n).keys()].map((i) => i + 1));
}

// recursive with memo
function generateTrees2(n: number): Array<TreeNode | null> {
  const memo = new Map();
  const helper = (nums: number[]): Array<TreeNode | null> => {
    const res: Array<TreeNode | null> = [];
    if (nums.length === 0) {
      return [null];
    }
    if (memo.has(JSON.stringify(nums))) {
      return memo.get(JSON.stringify(nums));
    }

    for (let i = 0; i < nums.length; i++) {
      const lefts = helper(nums.slice(0, i));
      const rights = helper(nums.slice(i + 1));

      for (const left of lefts) {
        for (const right of rights) {
          const root = new TreeNode(nums[i]);
          root.left = left;
          root.right = right;
          res.push(root);
        }
      }
    }

    memo.set(JSON.stringify(nums), res);
    return res;
  };

  return helper([...Array(n).keys()].map((i) => i + 1));
}

// dp bottom-up
function generateTrees3(n: number): Array<TreeNode | null> {
  const dp: Array<TreeNode | null>[] = [];
  dp[0] = [];

  if (n === 0) {
    return dp[0];
  }

  dp[0].push(null);
  for (let length = 1; length <= n; length++) {
    dp[length] = [];
    for (let root = 1; root <= length; root++) {
      const leftLen = root - 1;
      const rightLen = length - root;
      for (const leftNode of dp[leftLen]) {
        for (const rightNode of dp[rightLen]) {
          const rootNode = new TreeNode(root);
          rootNode.left = leftNode;
          // reuse the left sub trees, adding offset root makes it right sub trees
          rootNode.right = clone(rightNode, root);
          dp[length].push(rootNode);
        }
      }
    }
  }
  return dp[n];
}

const clone = (node: TreeNode | null, offset: number): TreeNode | null => {
  if (!node) {
    return null;
  }
  const root = new TreeNode(node.val + offset);
  root.left = clone(node.left, offset);
  root.right = clone(node.right, offset);
  return root;
};
