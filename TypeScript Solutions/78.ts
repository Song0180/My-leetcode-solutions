// backtracking, time complexity: O(n * 2^n) (take or not take); O(n) is for copy operation
// space: max stack: length of nums: n
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  backtrack(res, [], nums, 0);
  return res;
}

const backtrack = (
  res: number[][],
  visited: number[],
  nums: number[],
  startIndex: number
) => {
  res.push([...visited]);
  for (let i = startIndex; i < nums.length; i++) {
    visited.push(nums[i]);
    backtrack(res, visited, nums, i + 1);
    visited.pop();
  }
};

// iterative
// O(n*2^n) time complexity
const subsets2 = (nums: number[]): number[][] => {
  const res: number[][] = [[]];
  for (const num of nums) {
    const len = res.length;
    for (let i = 0; i < len; i++) {
      const prevItem = res[i].slice();
      prevItem.push(num);
      res.push(prevItem);
    }
  }
  return res;
};

// bit manipulation
// O(n*2^n) time complexity
/**
 *
 * To give all the possible subsets, we just need to exhaust all the possible combinations of the numbers. And each number has only two possibilities: either in or not in a subset. And this can be represented using a bit.
 * Using [1, 2, 3] as an example, 1 appears once in every two consecutive subsets, 2 appears twice in every four consecutive subsets, and 3 appears four times in every eight subsets (initially all subsets are empty):
 */
const subsets3 = (nums: number[]): number[][] => {
  const len = nums.length;
  const numOfSubsets = 1 << len;
  const res: number[][] = [...Array(numOfSubsets)].map((e) => [] as number[]);
  for (let subsetIndex = 0; subsetIndex < numOfSubsets; subsetIndex++) {
    for (let numIndex = 0; numIndex < len; numIndex++) {
      // if num should be in the subset
      if ((subsetIndex >> numIndex) & 1) {
        res[subsetIndex].push(nums[numIndex]);
      }
    }
  }
  return res;
};
