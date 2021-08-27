/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 1;
  let max = 0;

  if (!root) {
    return 0;
  }

  const dfs = (curNode) => {
    if (curNode.left === null && curNode.right === null) {
      max = max > depth ? max : depth;
      return;
    }
    if (curNode.left !== null) {
      depth++;
      dfs(curNode.left);
      depth--;
    }
    if (curNode.right !== null) {
      depth++;
      dfs(curNode.right);
      depth--;
    }
  };

  dfs(root);
  return max;
};

// O(n)
const maxDepth = (root) => {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
