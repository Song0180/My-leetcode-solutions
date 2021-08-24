// O(n)
var isValid = function (s) {
  // quickly solve edge cases
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;

  const prMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stk = [];

  for (let i = 0; i < s.length; i++) {
    if (prMap[s[i]]) {
      stk.push(s[i]);
    } else {
      if (prMap[stk.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return !stk.length;
};
