// bottom up dp
// O(m*n) corresponds to the length of the 2 strings
function longestCommonSubsequence(text1: string, text2: string): number {
  const dp: number[][] = Array.from(Array(text1.length + 1), () =>
    new Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}

// top-down dp
// https://www.youtube.com/watch?v=Ua0GhsJSlWM&t=573s
function longestCommonSubsequence2(text1: string, text2: string): number {
  const dp: number[][] = Array.from(Array(text1.length), () =>
    new Array(text2.length).fill(null)
  );

  const helper = (i: number, j: number) => {
    if (i === text1.length || j === text2.length) {
      return 0;
    }

    if (dp[i][j] !== null) {
      return dp[i][j];
    }

    if (text1[i] === text2[j]) {
      dp[i][j] = 1 + helper(i + 1, j + 1);
      return dp[i][j];
    } else {
      dp[i][j] = Math.max(helper(i + 1, j), helper(i, j + 1));
      return dp[i][j];
    }
  };

  return helper(0, 0);
}
