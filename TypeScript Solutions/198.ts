// top down time limit exceeded
function rob0(nums: number[]): number {
  return robHelper(nums, nums.length - 1);
}

const robHelper = (nums: number[], index: number): number => {
  if (index < 0) {
    return 0;
  }
  return Math.max(
    robHelper(nums, index - 1),
    nums[index] + robHelper(nums, index - 2)
  );
};

// top down with memo
function rob(nums: number[]): number {
  const memo: number[] = [];
  const robHelper = (nums: number[], index: number): number => {
    if (index < 0) {
      return 0;
    }
    if (memo[index] >= 0) {
      return memo[index];
    }
    memo[index] = Math.max(
      robHelper(nums, index - 1),
      nums[index] + robHelper(nums, index - 2)
    );
    return memo[index];
  };
  return robHelper(nums, nums.length - 1);
}

// iterative with dp table
function rob1(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const memo: number[] = [];

  memo[0] = 0;
  memo[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let val = nums[i];
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + val);
  }
  return memo[nums.length];
}

// iterative with 2 variables
function rob2(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let prev1 = 0,
    prev2 = 0;

  for (const num of nums) {
    let temp = prev1;
    // update prev1 and prev2
    // decide if rob prev2 + cur or prev1
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }

  return prev1;
}
