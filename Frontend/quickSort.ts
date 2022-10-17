const quickSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = arr.length >> 1;
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left: number[] = [],
    right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};
