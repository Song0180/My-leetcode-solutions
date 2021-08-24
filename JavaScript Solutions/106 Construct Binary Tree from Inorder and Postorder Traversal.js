// Time : O(n^2) (traverse each node, each time O(n))
// Space: O(n)
var buildTree = function (inorder, postorder) {
  if (!inorder.length) {
    return null;
  }

  const root = {
    val: postorder[postorder.length - 1],
    left: null,
    right: null,
  };
  // O(n)
  const rootIndexInOrder = inorder.indexOf(root.val);

  root.left = buildTree(
    inorder.slice(0, rootIndexInOrder),
    postorder.slice(0, rootIndexInOrder)
  );
  root.right = buildTree(
    inorder.slice(rootIndexInOrder + 1, inorder.length),
    postorder.slice(rootIndexInOrder, postorder.length - 1)
  );

  return root;
};

// O(n) for space and time
var buildTree = function (inorder, postorder) {
  const hash = {};

  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i;
  }

  const build = (start, end) => {
    if (start > end) {
      return null;
    }

    const val = postorder.pop();
    const root = new TreeNode(val);
    // build right first because we are poping the postorder array,
    // which has structure [..leftChildren, ...rightChildren, root]
    root.right = build(hash[val] + 1, end);
    root.left = build(start, hash[val] - 1);

    return root;
  };

  return build(0, inorder.length - 1);
};
