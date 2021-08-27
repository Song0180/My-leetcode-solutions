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
// brute force recursive
// O(n)?
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(null);
  add(l1, l2, dummy);
  return dummy.next;
};

const add = (l1, l2, cur) => {
  if (!l1 && !l2) {
    return;
  }
  if (!l1) {
    cur.next = l2;
    if (l2.val >= 10) {
      while (l2.val >= 10) {
        l2.val = l2.val - 10;
        if (l2.next) {
          l2.next.val += 1;
        } else {
          l2.next = new ListNode(1);
        }
        l2 = l2.next;
      }
    }
    return;
  } else if (!l2) {
    cur.next = l1;
    if (l1.val >= 10) {
      while (l1.val >= 10) {
        l1.val = l1.val - 10;
        if (l1.next) {
          l1.next.val += 1;
        } else {
          l1.next = new ListNode(1);
        }
        l1 = l1.next;
      }
    }
    return;
  } else {
    let sum = (l1.val += l2.val);
    if (sum >= 10) {
      sum = sum - 10;
      cur.next = new ListNode(sum);
      if (l1.next) {
        l1.next.val += 1;
      } else {
        l1.next = new ListNode(1);
      }
    } else {
      cur.next = new ListNode(sum);
    }
    l1 = l1.next;
    l2 = l2.next;
    cur = cur.next;
  }
  add(l1, l2, cur);
};

// iterative approach
// O(n)
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(null);
  const cur = dummy;
  let sum = 0,
    carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    cur.next = new ListNode(sum);
    cur = cur.next;

    sum = carry;
    carry = 0;
  }
  return dummy.next;
};
