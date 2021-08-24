// O(n)
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ans = [];
  if (set1.size > set2.size) {
    for (let n of set1) {
      if (set2.has(n)) {
        ans.push(n);
      }
    }
  } else {
    for (let n of set2) {
      if (set1.has(n)) {
        ans.push(n);
      }
    }
  }
  return ans;
};

// neater implementation
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  return [...new Set(nums2.filter((num) => set1.has(num)))];
};

// using map
// O(n)
var intersection = function (nums1, nums2) {
  const map = new Map();
  for (let num of nums1) {
    if (!map.has(num)) {
      map.set(num, 1);
    }
  }
  return nums2.filter((num) => {
    if (map.has(num)) {
      map.delete(num);
      return true;
    } else {
      return false;
    }
  });
};
