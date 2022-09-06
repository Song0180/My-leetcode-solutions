function twoSum(nums: number[], target: number): number[] {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (target - cur in hash) {
      return [hash[target - cur], i];
    }
    hash[cur] = i;
  }
  return [];
}
