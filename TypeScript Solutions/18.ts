function fourSum(nums: number[], target: number): number[][] {
  const res = [];
  nums.sort((a, b) => a - b);
  nSum(nums, 4, target, [], res);
  return res;
}

// generalized recursive solution
function nSum(
  nums: number[],
  n: number,
  target: number,
  currentNResult: number[],
  results: number[][]
) {
  if (
    n < 2 ||
    nums.length < n ||
    nums[0] * n > target ||
    target > nums[nums.length - 1] * n
  ) {
    return;
  }

  if (n === 2) {
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        results.push([...currentNResult, nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  } else {
    for (let i = 0; i < nums.length - n + 1; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      nSum(
        nums.slice(i + 1),
        n - 1,
        target - nums[i],
        [...currentNResult, nums[i]],
        results
      );
    }
  }
}
