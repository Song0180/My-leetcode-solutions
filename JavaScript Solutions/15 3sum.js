// brute force
// Time exceeded
var threeSum = function (nums) {
  const res = [];

  if (nums.length < 3) {
    return res;
  }

  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    const twoRes = twoSum(rest, target);
    twoRes.forEach((pos) => {
      if (pos.length > 0) {
        const sol = [...pos, nums[i]].sort((a, b) => a - b);
        let exist = false;
        for (let j = 0; j < res.length; j++) {
          if (JSON.stringify(res[j]) === JSON.stringify(sol)) {
            exist = true;
          }
        }
        if (!exist) {
          res.push(sol);
        }
      }
    });
  }

  return res;
};

var twoSum = function (nums, target) {
  const hash = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      res.push([nums[hash[target - n]], nums[i]]);
      delete hash[target - n];
    }
    // 将当前数字的index存入obj (即hashmap)
    hash[n] = i;
  }
  return res;
};

// O(n^2)
var threeSum = function (nums) {
  const res = [];

  if (nums.length < 3) {
    return res;
  }

  nums.sort((a, b) => a - b);

  let target = 0;
  // i: left, j:middle,k:right
  for (let i = 0; i < nums.length - 2; i++) {
    // no solution for sum anymore
    if (nums[i] > target) {
      break;
    }

    // skip the number with same value to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // from now on, look for a solution of 2 sum that fits target - nums[i]
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        res.push([nums[i], nums[j], nums[k]]);
        //  update j and k pointer
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }
        // move to next solution
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
