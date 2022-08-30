class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Time: O(n)
// Space: O(1)
// iterative
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Time: O(n)
// Space: O(n)
// recursive
function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;
  const newHead = reverseListRecursive(next);
  next.next = head;
  head.next = null;
  return newHead;
}
