// time: O(n)
// space: O(1)
// kadane's algorithm
function maxSubArray(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // if sum is negative, then it will not contribute to the max sum
    // so we can reset it to 0 and start from the next element
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(sum, max);
  }
  return max;
}

// dynamic programming
// time: O(n)
// space: O(n)
function maxSubArray2(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const dp: number[] = Array.from({ length: nums.length }, () => 0);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    // similar idea as above.
    // comparing max sum ending at last element, with starting a new subarray with current element
    dp[i] = Math.max(dp[i - 1] + nums[i], 0 + nums[i]);
    max = Math.max(dp[i], max);
  }
  return max;
}
