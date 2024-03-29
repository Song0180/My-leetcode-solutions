/**
 * @param {string} s
 * @return {number}
 */
// brute force
// O(n^3)
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }
  const hash = {};
  let sub = '';
  for (let i = 0; i < s.length; i++) {
    if (!sub.includes(s[i])) {
      sub += s[i];
      if (i === s.length - 1) {
        hash[sub.length] = sub;
      }
    } else {
      const repeatChar = s[i];
      hash[sub.length] = sub;
      if (sub[i - 1] === repeatChar) {
        i--;
      } else {
        while (s[i - 1] !== repeatChar) {
          i--;
        }
        i--;
      }
      sub = '';
    }
  }
  return parseInt(Object.keys(hash).pop());
};

// O(n) concise solution
var lengthOfLongestSubstring = function (s) {
  const map = {};
  var left = 0;

  // loop n times
  return s.split('').reduce((max, char, i) => {
    // if a visited char is in current substring, move left pointer to the next index of that char
    left = map[char] >= left ? map[char] + 1 : left;
    // update the index of current character
    map[char] = i;
    // compare max with current substring's length and update max;
    return Math.max(max, i - left + 1);
    // max initialized to be 0;
  }, 0);
};

// easier to understand version
function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let longest = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      // delete previous chars until after the repeated char
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

// faster solution:
//  O(n)
var lengthOfLongestSubstring = function (s) {
  var sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;

  for (i = 0; i < sLen; i++) {
    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    // if exists repeated Char, update maxStr to start with the char next to the repeated one;
    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};
