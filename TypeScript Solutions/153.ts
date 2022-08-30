// Binary search
// Time: O(log n)
function findMin(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // mid is larger than right,
    // means that the inflection point
    // is on the right half of the search space
    // vice versa
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
