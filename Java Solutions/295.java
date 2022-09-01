
// https://leetcode.com/problems/find-median-from-data-stream/discuss/74047/JavaPython-two-heap-solution-O(log-n)-add-O(1)-find
import java.util.Collections;
import java.util.PriorityQueue;

class MedianFinder {
  // largest at heap head
  private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
  // smallest at heap head (natural order)
  private PriorityQueue<Integer> large = new PriorityQueue<>();
  private boolean even = true;

  public MedianFinder() {

  }

  public void addNum(int num) {
    if (even) {
      // to keep the 2 pq even size
      large.offer(num);
      small.offer(large.poll());
    } else {
      small.offer(num);
      large.offer(small.poll());
    }
    even = !even;
  }

  public double findMedian() {
    if (even) {
      return (small.peek() + large.peek()) / 2.0;
    } else {
      return small.peek();
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */