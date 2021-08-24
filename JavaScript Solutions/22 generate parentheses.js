/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const options = [];
  const stack = [')'];
  for (let i = 0; i < n - 1; i++) {
    options.push('(');
  }
  for (let i = 0; i < n; i++) {
    options.push(')');
  }

  let numLeft = 1;
  let numRight = 0;

  const backtrack = (path, options) => {
    if (!options.includes('(')) {
      if (stack.length > 0) {
        for (let p of stack) {
          path += p;
        }
      }
      console.log('completed: ', path);
      if (!result.includes(path)) {
        result.push(path);
      }
      return;
    }

    for (let i = 0; i < options.length; i++) {
      const p = options[i];
      path += p;
      if (p === '(') {
        stack.push(')');
        numLeft++;
      } else {
        if (numLeft > numRight) {
          stack.pop();
          numRight++;
        } else {
          return;
        }
      }
      options = options.slice(0, i).concat(options.slice(i + 1));
      console.log(options, 1, path, 'stack: ', stack, numLeft, numRight);

      backtrack(path, options);

      const rightHalf = options.slice(i);
      options = options.slice(0, i);
      options.push(p);
      options = options.concat(rightHalf);
      path = path.slice(0, path.length - 1);
      if (p === '(') {
        stack.pop();
        numLeft--;
      } else {
        stack.push(')');
        numRight--;
      }
      console.log(options, 2, path, 'stack: ', stack, numLeft, numRight);
    }
  };

  backtrack('(', options);
  return result;
};

// neater implementation
// Let's say n = 3 pairs. We only have to consider the tree with "(" at the root (because ")" is not a valid root).

// To start with, let's create the full binary tree for string length=6 (as total chars is 6) using only
// "(" and ")". At each level (starting from root), you will have 2^0 , 2^1, 2^2, 2^3, 2^4 and 2^5 nodes.
// So the total number of nodes in the tree is 2^6 -1 (which is 2^2n -1).
// But due to backtracking we don't need to explore all the nodes, at most half as any string with more ")" than "(" is invalid.

// so the total number of nodes to explore is (2^2n -1)/2 and the complexity would be O( 2^2n) dropping the constants.
var generateParenthesis = function (n) {
  const result = [];

  const generate = (left, right, path) => {
    // if more ( remaining than )
    if (left > right) {
      return;
    }

    if (left === 0 && right === 0) {
      result.push(path);
      return;
    }
    // add left paranthes first
    if (left > 0) {
      generate(left - 1, right, path + '(');
    }
    if (right > 0) {
      generate(left, right - 1, path + ')');
    }
  };

  generate(n, n, '');

  return result;
};
