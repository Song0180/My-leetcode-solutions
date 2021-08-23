/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// O(n)
var mergeTwoLists = function (l1, l2) {
  if (!l1 && l2) {
    return l2;
  } else if (l1 && !l2) {
    return l1;
  } else if (!l1 && !l2) {
    return l1;
  }
  let head;
  if (l1.val <= l2.val) {
    head = l1;
    merge(l1.next, l2, head);
  } else {
    head = l2;
    merge(l1, l2.next, head);
  }
  return head;
};

const merge = (head1, head2, cur) => {
  if (!head1 && head2) {
    cur.next = head2;
    return;
  } else if (!head2 && head1) {
    cur.next = head1;
    return;
  } else if (!cur.next) {
    return;
  }

  if (head1.val <= head2.val) {
    const n1 = head1.next;
    cur.next = head1;
    const updatedCur = cur.next ? cur.next : cur;
    merge(n1, head2, updatedCur);
  } else {
    const n2 = head2.next;
    cur.next = head2;
    const updatedCur = cur.next ? cur.next : cur;
    merge(head1, n2, updatedCur);
  }
};

// neater implementation (iterative)
var mergeTwoLists = function (l1, l2) {
  const dummyHead = { val: null, next: null };
  let cur = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummyHead.next;
};

// neater implementation (recursive)
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
