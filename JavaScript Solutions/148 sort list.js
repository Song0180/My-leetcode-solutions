// merge sort
// O(nlogn) for time and space
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const [left, right] = split(head);
  const dummy = new ListNode(null);
  return merge(dummy, sortList(left), sortList(right));
};

const split = (head) => {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = head;
  const right = slow.next;
  // break the link from left to right
  slow.next = null;
  return [left, right];
};

const merge = (dummy, left, right) => {
  let ptr = dummy;
  while (left || right) {
    if (!left) {
      ptr.next = right;
      right = right.next;
    } else if (!right) {
      ptr.next = left;
      left = left.next;
    } else {
      if (left.val < right.val) {
        ptr.next = left;
        left = left.next;
      } else {
        ptr.next = right;
        right = right.next;
      }
    }
    ptr = ptr.next;
  }
  return dummy.next;
};

// bottom - up approach
// O(1) space, O(nlogn) time
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const dummy = new ListNode(null);
  dummy.next = head;

  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }

  for (let step = 1; step < length; step <<= 1) {
    let prev = dummy;
    let cur = dummy.next;
    while (cur) {
      const left = cur;
      const right = split(left, step);
      cur = split(right, step);
      prev = merge(left, right, prev);
    }
  }
  return dummy.next;
};

const split = (head, step) => {
  if (!head) {
    return null;
  }

  for (let i = 1; head.next && i < step; i++) {
    head = head.next;
  }

  const right = head.next;
  head.next = null;
  return right;
};

const merge = (left, right, head) => {
  while (left && right) {
    if (left.val < right.val) {
      head.next = left;
      left = left.next;
    } else {
      head.next = right;
      right = right.next;
    }
    head = head.next;
  }

  if (left) {
    head.next = left;
  } else if (right) {
    head.next = right;
  }
  while (head.next) {
    head = head.next;
  }
  return head;
};
