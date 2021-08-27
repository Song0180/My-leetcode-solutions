/**
 * @param {string} s
 * @return {number}
 */

// O(n)
var romanToInt = function (s) {
  const numMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V') {
          sum += 4;
          i += 1;
        } else if (s[i + 1] === 'X') {
          sum += 9;
          i += 1;
        } else {
          sum += numMap[s[i]];
        }
        break;
      case 'X':
        if (s[i + 1] === 'L') {
          sum += 40;
          i += 1;
        } else if (s[i + 1] === 'C') {
          sum += 90;
          i += 1;
        } else {
          sum += numMap[s[i]];
        }
        break;
      case 'C':
        if (s[i + 1] === 'D') {
          sum += 400;
          i += 1;
        } else if (s[i + 1] === 'M') {
          sum += 900;
          i += 1;
        } else {
          sum += numMap[s[i]];
        }
        break;
      default:
        sum += numMap[s[i]];
    }
  }
  return sum;
};

// neater solution, also O(n)
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

// another way of thinking (written in python)
// O(n)
// class Solution:
//     def romanToInt(self, s: str) -> int:
//         translations = {
//             "I": 1,
//             "V": 5,
//             "X": 10,
//             "L": 50,
//             "C": 100,
//             "D": 500,
//             "M": 1000
//         }
//         number = 0
//         s = s.replace("IV", "IIII").replace("IX", "VIIII")
//         s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
//         s = s.replace("CD", "CCCC").replace("CM", "DCCCC")
//         for char in s:
//             number += translations[char]
//         return number
