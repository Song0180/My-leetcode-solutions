function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(...nums);
  }

  return Math.max(
    rob1(nums, 0, nums.length - 2),
    rob1(nums, 1, nums.length - 1)
  );
}

// recursive with memo
function rob1(nums: number[], start: number, end: number): number {
  const memo: number[] = [];
  const helper = (curIndex: number) => {
    if (curIndex < start) {
      return 0;
    }

    if (memo[curIndex] !== undefined) {
      return memo[curIndex];
    }

    memo[curIndex] = Math.max(
      helper(curIndex - 1),
      helper(curIndex - 2) + nums[curIndex]
    );

    return memo[curIndex];
  };

  return helper(end);
}

// iterative with dp table
function rob2(nums: number[], start: number, end: number): number {
  const dp: number[] = [];
  dp[0] = 0;
  dp[1] = nums[start];

  for (let i = 1; i < nums.length - 1; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i + start]);
  }

  return dp[nums.length - 1];
}

// iterative constant vars
function rob3(nums: number[], start: number, end: number): number {
  let prev1 = 0,
    prev2 = 0;

  for (let i = start; i <= end; i++) {
    const cur = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = cur;
  }

  return prev1;
}
