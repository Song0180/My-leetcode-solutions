/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(log n)
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  if (target > nums[right]) {
    return right + 1;
  } else if (target < nums[left]) {
    return left;
  } else {
    return left + 1;
  }
};

// recursive implementation
// O(log n)
const searchInsert = (nums, target) => {
  return bs(nums, target, 0, nums.length - 1);
};

const bs = (nums, target, left, right) => {
  // i.e. target is smaller than all the nums
  if (left > right) {
    return left;
  }

  const mid = Math.floor(left + (right - left) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return bs(nums, target, mid + 1, right);
  } else if (nums[mid] > target) {
    return bs(nums, target, left, mid - 1);
  }
};
