// O(nlogn) due to the sort
function largestNumber(nums: number[]): string {
  const strs = nums.map((num) => num.toString());

  strs.sort((str1, str2) => {
    const s1 = str1 + str2;
    const s2 = str2 + str1;
    // if s2 is larger, result is positive, means str2 comes first
    return s2.localeCompare(s1);
  });

  return strs[0] === '0' ? '0' : strs.join('');
}
