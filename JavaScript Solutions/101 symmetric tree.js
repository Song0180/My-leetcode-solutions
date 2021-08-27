// Time: O(n)
// Space: O(h)
// recursive
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  const checkSym = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return checkSym(left.left, right.right) && checkSym(left.right, right.left);
  };

  return checkSym(root.left, root.right);
};

// iterative bfs
// O(n) for time and space
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  const q = [root.left, root.right];

  while (q.length > 0) {
    const left = q.shift();
    const right = q.shift();
    if (!left && !right) {
      continue;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    q.push(left.left, right.right);
    q.push(left.right, right.left);
  }
  return true;
};
