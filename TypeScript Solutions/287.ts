// hash map
function findDuplicate(nums: number[]): number {
  const hash = {};
  nums.forEach((num) => {
    if (!(num in hash)) {
      hash[num] = 1;
    } else {
      hash[num] += 1;
    }
  });
  const targetEntry = Object.entries(hash).find((value) => {
    const [num, time] = value as [string, number];
    return time > 1;
  }) as [string, number];
  return Number(targetEntry[0]);
}

// set
function findDuplicate2(nums: number[]): number {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
  return -1;
}

// 2 pointers / fast slow pointers
// see explanation in solution Floyd's Tortoise and Hare (Cycle Detection)
// https://leetcode.com/problems/find-the-duplicate-number/solution/

function findDuplicate3(nums: number[]): number {
  let slow = 0,
    fast = 0;

  // find the intersection point of the two runners
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = 0;

  // find the entrance of the cycle
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
