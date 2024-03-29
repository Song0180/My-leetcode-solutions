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

// O(n)
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // get length of l1 l2
  let l1Length = 0,
    l2Length = 0;
  let l1Trav = l1,
    l2Trav = l2;
  while (l1Trav) {
    l1Length++;
    l1Trav = l1Trav.next;
  }
  while (l2Trav) {
    l2Length++;
    l2Trav = l2Trav.next;
  }
  // make l1 l2 equal length by padding zeros
  const lengthDiff = l1Length - l2Length;
  if (lengthDiff > 0) {
    const newL2Head = new ListNode(0);
    let trav = newL2Head;
    for (let i = 1; i < lengthDiff; i++) {
      trav.next = new ListNode(0);
      trav = trav.next;
    }
    trav.next = l2;
    l2 = newL2Head;
  } else if (lengthDiff < 0) {
    const newL1Head = new ListNode(0);
    let trav = newL1Head;
    for (let i = 1; i < -lengthDiff; i++) {
      trav.next = new ListNode(0);
      trav = trav.next;
    }
    trav.next = l1;
    l1 = newL1Head;
  }
  // add l1 l2
  const [nodes, carry] = recursivelyAdd(l1, l2);

  if (carry !== 0) {
    const head = new ListNode(carry);
    head.next = nodes;
    return head;
  } else {
    return nodes;
  }
}

const recursivelyAdd = (
  l1: ListNode | null,
  l2: ListNode | null
): [nextNodes: ListNode | null, carry: number] => {
  if (l1 && l2) {
    const [nextNodes, carry] = recursivelyAdd(l1.next, l2.next);

    const sum = l1.val + l2.val + carry;
    const newCarry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    node.next = nextNodes;
    return [node, newCarry];
  }
  return [null, 0];
};

// stack solution O(n)
function addTwoNumbers2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const s1: number[] = [],
    s2: number[] = [];

  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let sum = 0;
  let list = new ListNode(0);

  while (s1.length > 0 || s2.length > 0) {
    sum += (s1.pop() ?? 0) + (s2.pop() ?? 0);

    list.val = sum % 10;
    const carry = Math.floor(sum / 10);
    const newHead = new ListNode(carry);

    newHead.next = list;
    list = newHead;
    sum = carry;
  }

  return list.val === 0 ? list.next : list;
}
