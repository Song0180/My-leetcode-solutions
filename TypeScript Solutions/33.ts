// 2 binary searches, 1 for finding smallest value, 1 for searching target
function search(nums: number[], target: number): number {
  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const smallest = left;
  const smallestToRight = nums.length - 1 - smallest;

  let newLeft = 0,
    newRight = nums.length - 1;

  while (newLeft <= newRight) {
    const mid = Math.floor((newLeft + newRight) / 2);
    const realMid =
      mid <= smallestToRight ? smallest + mid : mid - smallestToRight - 1;
    if (target === nums[realMid]) {
      return realMid;
    } else if (target < nums[realMid]) {
      newRight = mid - 1;
    } else {
      newLeft = mid + 1;
    }
  }

  return -1;
}
