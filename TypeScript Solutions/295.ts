class MedianFinder {
  private arr: number[] = [];
  constructor() {}

  // binary search, O(logn)
  addNum(num: number): void {
    const binarySearch = (n: number) => {
      let start = 0;
      let end = this.arr.length;
      while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (n > this.arr[mid]) start = mid + 1;
        else end = mid;
      }
      // insert the number at start (mid)
      this.arr.splice(start, 0, n);
    };
    if (this.arr.length === 0) this.arr.push(num);
    else binarySearch(num);
  }

  // O(1)
  findMedian(): number {
    if (this.arr.length % 2 === 0) {
      const mid = Math.floor(this.arr.length / 2) - 1;
      return (this.arr[mid] + this.arr[mid + 1]) / 2;
    } else {
      const mid = Math.floor(this.arr.length / 2);
      return this.arr[mid];
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
