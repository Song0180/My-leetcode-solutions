/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// not very efficient as many time spent on solving duplicates
var combinationSum = function (candidates, target) {
  const result = new Set();

  const backtrack = (list, sum) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.add(JSON.stringify([...list].sort((a, b) => a - b)));
      return;
    }

    for (let num of candidates) {
      list.push(num);
      backtrack(list, sum + num);
      list.pop();
    }
  };
  backtrack([], 0);
  const trueRes = [...result].map((str) => JSON.parse(str));
  return trueRes;
};

// more efficient backtracking
var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (arr, sum, idx) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(arr);
    }

    for (let i = idx; i < candidates.length; i++) {
      backtrack([...arr, candidates[i]], sum + candidates[i], i);
    }
  };
  backtrack([], 0, 0);
  return result;
};
