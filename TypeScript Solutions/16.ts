//  variant from 15 3Sum
function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }

  let diff = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(diff)) {
        diff = sum - target;
        if (diff === 0) {
          return sum;
        }
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return target + diff;
}
