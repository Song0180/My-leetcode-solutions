/**
 * write a function
 * function solution(s);
 * that, given a string S consisting of N characters,
 * returns a string that is the result of replacing each '?' in string S with an 'a' or a 'b' character
 * and does not contain three identical consecutive letters
 */

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const chars = S.split('');
  for (let i = 0; i < S.length; i++) {
    if (chars[i] === '?') {
      // prev 2 chars
      if (i - 1 >= 0 && i - 2 >= 0) {
        if (chars[i - 1] === chars[i - 2]) {
          if (chars[i - 1] === 'a') {
            chars[i] = 'b';
          } else {
            chars[i] = 'a';
          }
          continue;
        }
      }

      // prev 1 next 1
      if (i - 1 >= 0 && i + 1 < chars.length) {
        if (chars[i + 1] === chars[i - 1]) {
          if (chars[i - 1] === 'a') {
            chars[i] = 'b';
          } else {
            chars[i] = 'a';
          }
          continue;
        }
      }

      if (i + 1 < chars.length && i + 2 < chars.length) {
        if (chars[i + 1] === chars[i + 2]) {
          if (chars[i + 1] === 'a') {
            chars[i] = 'b';
          } else {
            chars[i] = 'a';
          }
          continue;
        }
      }
      chars[i] = 'a';
    }
  }
  return chars.join('');
}
