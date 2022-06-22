/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// merge sort O(nlogn) O(1)
function split(head: ListNode): [left: ListNode, right: ListNode] {
  let slow: ListNode = head,
    fast: ListNode | null = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next as ListNode;
  }

  const right = slow.next as ListNode;
  slow.next = null;
  return [head, right];
}

function merge(
  left: ListNode | null,
  right: ListNode | null,
  dummyHead: ListNode
): ListNode {
  let ptr: ListNode = dummyHead;
  while (left || right) {
    if (!left) {
      ptr.next = right;
      break;
    } else if (!right) {
      ptr.next = left;
      break;
    } else {
      if (left.val < right.val) {
        ptr.next = left;
        left = left.next;
      } else {
        ptr.next = right;
        right = right.next;
      }
    }
    ptr = ptr.next as ListNode;
  }
  return dummyHead.next as ListNode;
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const [left, right] = split(head);
  const dummyHead = new ListNode();
  return merge(sortList(left), sortList(right), dummyHead);
}

// 1 3 cur
// 2 4 other

// prev: n, cur: 1, other: 2,
// prev: 1, cur: 3, other: 2,
// prev: 2, cur: 3, other: 4,
// prev: 3, cur: n, other: 4,
//
