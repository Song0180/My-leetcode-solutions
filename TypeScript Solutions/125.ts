function isPalindrome(s: string): boolean {
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalized.length === 0) {
    return true;
  }

  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

function isPalindrome2(s: string): boolean {
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalized.length === 0) {
    return true;
  }

  let l = 0,
    r = normalized.length - 1;

  while (l < r) {
    if (normalized[l] !== normalized[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
