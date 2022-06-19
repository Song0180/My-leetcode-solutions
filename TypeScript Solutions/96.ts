function numTrees(n: number): number {
  if (n === 1) {
    return 1;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    const greater = n - i;
    const smaller = i - 1;
    if (greater > 0 && smaller > 0) {
      sum += numTrees(greater) * numTrees(smaller);
    } else if (greater > 0) {
      sum += numTrees(greater);
    } else if (smaller > 0) {
      sum += numTrees(smaller);
    }
  }

  return sum;
}
// no cache, slow
function numTreesSimpler(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    const greater = n - i;
    const smaller = i - 1;

    sum += numTrees(greater) * numTrees(smaller);
  }

  return sum;
}

// bottom top DP
// dynamic programming, see explanation  https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i)
function numTrees2(n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}

/**
 * i = 1, greater = 2, smaller = 0, sum = 2
 * i = 2, greater = 1, smaller = 1, sum = 4 -> issue
 * i = 3, greater = 0, smaller = 2, sum = 6
 */

/**
 * i = 2, greater = 2, smaller = 1, sum = 2 + 1 = 3?
 *
 *  2
 * 1 3
 *    4
 *
 *  2
 *   3
 *    4
 *   1
 *
 *  2
 *   3
 *  1 4
 *
 *  2
 *   3
 *  1
 *   4
 *
 *  2
 * 1  4
 *  3
 *
 *  2
 * 1  4
 *   3
 *
 *   2
 *  1
 *   3
 *    4
 *
 *  2
 * 1
 *  4
 * 3
 */
