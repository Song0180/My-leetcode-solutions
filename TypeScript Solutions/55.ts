// recursive exceeded max heap for corner cases
function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  for (let i = 0; i <= nums.length - 2; i++) {
    if (nums[i] >= nums.length - 1 - i) {
      return canJump(nums.slice(0, i + 1));
    }
  }

  return false;
}

// iterative but very slow worst O(n^2)
function canJump2(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  const memo: boolean[] = Array(nums.length).fill(null);
  memo[0] = nums[0] > 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      memo[i + 1] = memo[i + 1] === null ? false : memo[i + 1];
      continue;
    }
    const start = i;
    const end = i + nums[i];
    for (let j = start; j <= end; j++) {
      if (memo[j] === true) {
        continue;
      }
      if (memo[i] === false) {
        return false;
      }
      memo[j] = true;
    }
  }

  return memo[nums.length - 1] ?? false;
}

// iterative O(n)
function canJump3(nums: number[]): boolean {
  let dist = 0;
  for (let i = 0; i <= dist; i++) {
    // update distance we can reach
    dist = Math.max(dist, i + nums[i]);
    // if farther than end goal
    if (dist >= nums.length - 1) {
      return true;
    }
  }
  return false;
}

// another version of iterative O(n)
function canJump4(nums: number[]): boolean {
  let dist = 0;
  for (let i = 0; i < nums.length; i++) {
    // cannot reach current index
    if (dist < i) {
      return false;
    }
    dist = Math.max(i + nums[i], dist);
  }
  return true;
}
