// recursive
// time: O(m * n)
// space: O(m * n)
function uniquePaths(m: number, n: number): number {
  // add 1 to avoid out of index, since index start from 0 but m * n start from 1z
  const memo: number[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  const dp = (m: number, n: number) => {
    if (m === 1 || n === 1) {
      memo[m][n] = 1;
      return 1;
    }

    if (memo[m][n]) {
      return memo[m][n];
    }

    memo[m][n] = dp(m - 1, n) + dp(m, n - 1);
    return memo[m][n];
  };
  return dp(m, n);
}

// iterative
// time: O(m * n)
// space: O(m * n)
function uniquePaths2(m: number, n: number): number {
  const memo: number[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1) {
        memo[i][j] = 1;
      } else {
        memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
      }
    }
  }
  return memo[m][n];
}
