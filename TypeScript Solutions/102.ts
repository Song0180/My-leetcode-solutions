/**
 * Definition for a binary tree node.
 *  */
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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const q: TreeNode[] = [];

  if (root) {
    q.push(root);
  }

  while (q.length > 0) {
    const row: number[] = [];
    const qLength = q.length;
    for (let i = 0; i < qLength; i++) {
      const cur = q.shift() as TreeNode;
      row.push(cur.val);
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
    res.push(row);
  }
  return res;
}
