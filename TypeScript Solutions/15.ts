const twoSum = (nums: number[], target: number): number[][] => {
  const hash = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      res.push([nums[hash[target - n]], nums[i]]);
      delete hash[target - n];
    }
    // 将当前数字的index存入hashmap
    hash[n] = i;
  }
  return res;
};

function threeSum(nums: number[]): number[][] {
  const res = [];
  const memo = [];
  if (nums.length < 3) return res;
  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    if (!memo.includes(nums[i])) {
      const rest = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
      const twoSumRes = twoSum(rest, target);
      if (twoSumRes.length > 0) {
        twoSumRes.forEach((finalRes) => {
          finalRes.push(nums[i]);
          finalRes.sort();
          if (
            !res
              .map((res) => JSON.stringify(res))
              .includes(JSON.stringify(finalRes))
          ) {
            res.push(finalRes);
          }
        });
      }
      memo.push(nums[i]);
    }
  }
  return res;
}

const threeSum2 = (nums: number[]) => {
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);

  const target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};

// twoSum
function twoSum2(nums: number[], target: number): number[] {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (hash[target - cur] !== undefined) {
      // hashed index is always smaller
      return [hash[target - cur], i];
    }
    hash[nums[i]] = i;
  }
  return [];
}
