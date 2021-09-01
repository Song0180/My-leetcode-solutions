// O(n)
var decodeString = function (s) {
  let res = '';
  const mulStack = [];
  const subStack = [];
  let numStr = '';

  for (let i = 0; i < s.length; i++) {
    const parse = Number.parseInt(s[i]);
    if (!Number.isNaN(parse)) {
      numStr += parse;
    } else {
      if (numStr.length > 0) {
        mulStack.push(Number.parseInt(numStr));
        numStr = '';
      }
      if (s[i] === '[') {
        subStack.push('');
      } else {
        if (!subStack.length) {
          res += s[i];
        } else {
          if (s[i] === ']') {
            const sub = subStack.pop();
            const mul = mulStack.pop();
            for (let i = 0; i < mul; i++) {
              if (subStack.length > 0) {
                subStack[subStack.length - 1] += sub;
              } else {
                res += sub;
              }
            }
          } else {
            subStack[subStack.length - 1] += s[i];
          }
        }
      }
    }
  }
  return res;
};

// another approach using stack:
const decodeString = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};

// iterative, solve inner most nested str first
var decodeString = function (s) {
  while (s.indexOf('[') != -1) {
    // base case, breaks when there's no bracket found
    let left = s.lastIndexOf('['); // left position of the inner-most `[`
    let right = left + s.substring(left).indexOf(']'); // right positio of the inner-most `]`
    let word = s.substring(left + 1, right); // between them is the string
    let count = '';
    while (s[left - 1] >= 0 && s[left - 1] <= 9) {
      // try to find a valid number
      left--;
      count = s[left] + count;
    }
    s = s.substring(0, left) + word.repeat(count) + s.substring(right + 1); // put them all togher and repeat :)
  }
  return s;
};
