// brute force
// O(n^2)
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      max = max > area ? max : area;
    }
  }
  return max;
};

// O(n)
var maxArea = function (height) {
  let max = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = max > area ? max : area;

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};

// neater implementation
var maxArea = function (H) {
  let ans = 0,
    i = 0,
    j = H.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
    H[i] <= H[j] ? i++ : j--;
  }
  return ans;
};
