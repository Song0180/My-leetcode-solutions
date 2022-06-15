/**
 * Definition for singly-linked list.
 *  */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// iterative
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = head.next;
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  while (cur !== null && cur.next !== null) {
    const next = cur.next;
    cur.next = next.next;
    next.next = cur;
    if (prev) {
      prev.next = next;
    }
    prev = cur;
    cur = cur.next;
  }

  return newHead;
}

// recursive
function swapPairs2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = head,
    cur = head.next;
  prev.next = swapPairs(cur.next);
  cur.next = prev;
  return cur;
}
