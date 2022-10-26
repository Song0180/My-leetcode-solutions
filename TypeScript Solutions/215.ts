const popMax = (nums: number[]) => {
  let maxIndex: number | null = null;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  nums.splice(maxIndex as number, 1);
  return { max, nums };
};

function findKthLargest(nums: number[], k: number): number {
  let curNums = nums;
  for (let i = 0; i < k; i++) {
    const { max, nums } = popMax(curNums);
    curNums = nums;
    if (i === k - 1) {
      return max;
    }
  }
  return 0;
}

function findKthLargest2(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, k);
}

function quickSelect(arr: number[], start: number, end: number, k: number) {
  const pivotIndex = partition(arr, start, end);
  /**
   * Use pivotIndex as the seperater. If k is smaller than the length of the
   * right side of the array, the target is in the right side of the array.
   * If k is larger, the target is in the left side of the array.
   */
  if (k < arr.length - pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  } else if (k > arr.length - pivotIndex) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }
  // pivotIndex is the index of the target if k equals to the length of the
  // right side of the array.
  return arr[pivotIndex];
}

const partition = (nums: number[], left: number, right: number) => {
  const pivot = nums[right];
  let l = left,
    r = right - 1;
  // move all numbers smaller than pivot to the left and larger to the right
  while (l <= r) {
    while (nums[l] < pivot) {
      l++;
    }
    while (nums[r] > pivot) {
      r--;
    }
    if (l <= r) {
      swap(nums, l, r);
      l++;
      r--;
    }
  }

  swap(nums, l, right);
  return l;
};

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
