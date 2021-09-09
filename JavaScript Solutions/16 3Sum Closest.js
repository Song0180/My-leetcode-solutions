/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length === 3) {
    return nums.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }

  d = 1000000;
  res = null;

  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const diff = Math.abs(sum - target);
      console.log(sum, diff, i, j, k);
      if (diff === 0) {
        return sum;
      }

      if (d > diff) {
        d = diff;
        res = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};

// simplified version
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target))
        closest = localSum;
      if (localSum > target) right--;
      else left++;
    }
  }
  return closest;
};
