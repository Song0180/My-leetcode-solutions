function isPalindrome(x: number): boolean {
  let str = x.toString();
  let l = 0,
    r = str.length - 1;

  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

function isPalindrome2(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const origin = x;
  let revSum = 0;

  while (x) {
    revSum = revSum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return origin === revSum;
}

function isPalindrome3(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === rev || x === Math.floor(rev / 10);
}
