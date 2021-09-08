/**
 * @param {string} s
 * @return {string}
 */
// brute force
// time: O(n^2)
var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let res = '';

  const checkPal = (left, right) => {
    while (left <= right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (checkPal(i, j)) {
        const newRes = s.slice(i, j + 1);
        res = res.length > newRes.length ? res : newRes;
      }
    }
  }

  return res;
};

// O(n2)
function longestPalindrome(s) {
  // ll: Left index of the longest palindrome.
  // rr: Right index of the longest palindrome.
  let ll = 0,
    rr = 0;

  // Iterate all palindromes with center indices
  // [..., i, ...] or [... i, i+1, ...]
  for (let i = 0; i < s.length; i++) {
    // to handle odd and even lengths
    for (let j of [i, i + 1]) {
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        // Found a new palindrome [l, ..., i, j, ..., r]
        // Update the ll, rr if the newly found palindrome is longer than the
        // existing one.
        [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];
    }
  }
  return s.substring(ll, rr + 1);
}

// O(n^2)

const longestPalindrome = (s) => {
  let max = '';

  const extend = (i, j) => {
    for (; 0 <= i && j < s.length; i--, j++) {
      if (s[i] !== s[j]) {
        break;
      }
    }
    return s.slice(i + 1, j);
  };

  for (let i = 0; i < s.length; i++) {
    let s1 = extend(i, i),
      s2 = extend(i, i + 1);
    if (s1.length > max.length) {
      max = s1;
    }
    if (s2.length > max.length) {
      max = s2;
    }
  }

  return max;
};
