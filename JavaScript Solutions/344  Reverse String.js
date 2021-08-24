/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// O( n / 2) iterative O(1) space
var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// O(n/2) recursive  O(n) space
var reverseString = function (s) {
  const reverse = (left, right) => {
    if (left > right) {
      return;
    }
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
    reverse(left, right);
  };

  reverse(0, s.length - 1);
};
