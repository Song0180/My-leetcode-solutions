// top-down dp from hint
// without cache
// time limit exceeded
// Since the given leaf nodes are result of inorder traversal,
// we know there will be pivots that divide arr into left and right,
// nodes in the left build left subtree and nodes in the right build right subtree.
// For each subtree, if we know the minimum sum, we can use it to build the result of the parent tree,
// so the problem can be divided into subproblems
function mctFromLeafValues(arr: number[]): number {
  const dp = (i: number, j: number): number => {
    if (i >= j) {
      return 0;
    }
    let min = Infinity;
    for (let k = i; k < j; k++) {
      min = Math.min(
        min,
        dp(i, k) +
          dp(k + 1, j) +
          Math.max(...arr.slice(i, k + 1)) *
            Math.max(...arr.slice(k + 1, j + 1))
      );
    }
    return min;
  };
  return dp(0, arr.length - 1);
}

// top-down dp with cache
// O(n^3) -> n^2 combinations of i and j, each has O(n) time
function mctFromLeafValues2(arr: number[]): number {
  const cache: { [key: string]: number } = {};

  const dp = (i: number, j: number): number => {
    if (`${i}${j}` in cache) {
      return cache[`${i}${j}`];
    }

    if (i >= j) {
      return 0;
    }
    let min = Infinity;
    for (let k = i; k < j; k++) {
      min = Math.min(
        min,
        dp(i, k) +
          dp(k + 1, j) +
          Math.max(...arr.slice(i, k + 1)) *
            Math.max(...arr.slice(k + 1, j + 1))
      );
    }
    cache[`${i}${j}`] = min;
    return min;
  };
  return dp(0, arr.length - 1);
}

// bottom-up dp
// o(n^3)
function mctFromLeafValues3(arr: number[]): number {
  const dp = Array.from(Array(arr.length), () =>
    new Array(arr.length).fill(Infinity)
  );
  for (let n = 0; n < arr.length; n++) {
    dp[n][n] = 0;
  }
  for (let len = 2; len <= arr.length; len++) {
    for (let i = 0; i < arr.length - len + 1; i++) {
      const j = i + len - 1;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] +
            dp[k + 1][j] +
            Math.max(...arr.slice(i, k + 1)) *
              Math.max(...arr.slice(k + 1, j + 1))
        );
      }
    }
  }
  return dp[0][arr.length - 1];
}

// greedy approach O(n^2)
/**
 *
 * To achieve a better time complexity, one important observation is that when we build each level of the binary tree,
 * it is the max left leaf node and max right lead node that are being used,
 * so we would like to put big leaf nodes close to the root.
 * Otherwise,
 * taking the leaf node with max value in the array as an example,
 * if its level is deep, for each level above it,
 * its value will be used to calculate the non-leaf node value,
 * which will result in a big total sum.
 * With above observation,
 * the greedy approach is to find the smallest value in the array,
 * use it and its smaller neighbor to build a non-leaf node,
 * then we can safely delete it from the array since it has a smaller value than its neightbor so it will never be used again.
 * Repeat this process until there is only one node left in the array (which means we cannot build a new level any more)
 */

const mctFromLeafValues4 = (arr: number[]): number => {
  let res = 0;
  while (arr.length > 1) {
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    if (0 < index && index < arr.length - 1) {
      res += min * Math.min(arr[index - 1], arr[index + 1]);
    } else {
      res += min * (index === 0 ? arr[index + 1] : arr[index - 1]);
    }
    arr.splice(index, 1);
  }
  return res;
};

// monotonic stack approach
/**
 * one observation is that for each leaf node in the array,
 * when it becomes the minimum value in the remaining array,
 * its left and right neighbors will be the first bigger value in the original array to its left and right.
 * This observation is a clue of a possible monotonic stack solution as follows.
 */

const mctFromLeafValues5 = (arr: number[]): number => {
  let res = 0;
  const stack = [Infinity];
  for (let num of arr) {
    // while num is bigger than the left nodes, group them and generate the smaller product for non-leaf nodes
    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      const cur = stack.pop()!;
      if (stack.length > 0) {
        // choose the minimum value from left (in the stack) or right (current num in iteration)
        res += cur * Math.min(stack[stack.length - 1], num);
      }
    }
    // push smaller num to the stack
    stack.push(num);
  }
  // if there are values left in the stack, they sure will be mutiplied anyway
  // and added to the result.
  // > 2 because we have an extra Infinity and we need stack[stack.length - 1] after pop() below
  while (stack.length > 2) {
    res += stack.pop()! * stack[stack.length - 1];
  }
  return res;
};

// same idea but another code style of using stack
const mctFromLeafValues6 = (arr: number[]): number => {
  let res = 0;
  const stack: number[] = [];
  for (let num of arr) {
    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      const smaller = stack.pop()!;
      if (stack.length > 0) {
        res += smaller * Math.min(stack[stack.length - 1], num);
      } else {
        res += smaller * num;
      }
    }
    stack.push(num);
  }
  // > 1 because we have a stack[stack.length - 1] after pop() below
  while (stack.length > 1) {
    res += stack.pop()! * stack[stack.length - 1];
  }
  return res;
};
