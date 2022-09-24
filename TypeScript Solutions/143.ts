class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
// time O(n)
// space O(n)
// idea is putting all nodes to a list
// the first half should merge with the reversed second half
function reorderList(head: ListNode | null): void {
  const nodes: ListNode[] = [];
  let copy = head;
  while (copy) {
    const next = copy.next;
    copy.next = null;
    nodes.push(copy);
    copy = next;
  }
  // find mid length
  const firstLen = Math.ceil(nodes.length / 2);
  // merge first half & second half
  for (let i = 0; i < firstLen; i++) {
    const fwd = nodes[i];
    const bwd = nodes[nodes.length - 1 - i];
    if (i < nodes.length - 1 - i) {
      fwd.next = bwd;
    }
    if (i + 1 < firstLen) {
      const fwdNext = nodes[i + 1];
      bwd.next = fwdNext;
    }
  }
}

// time O(n)
// space O(1)
function reorderList2(head: ListNode | null): void {
  if (!head || !head.next) {
    return;
  }

  // 1. find middle
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }

  // 2. reverse the second half
  let prev: ListNode | null = null,
    cur: ListNode | null = slow.next as ListNode;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  slow.next = null;

  // 3. merge 2 lists
  let head1 = head,
    head2 = prev;
  while (head2) {
    let next = head1.next;
    head1.next = head2;
    // switching head 1 & 2 and repeat
    head1 = head2;
    head2 = next;
  }
}
