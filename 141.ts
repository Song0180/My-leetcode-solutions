class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }

  while (head) {
    if (Number.isNaN(head.val)) {
      return true;
    }
    head.val = NaN;
    head = head.next;
  }

  return false;
}

// two pointers
// faster pointer will catchup the slower one if a cycle exists
function hasCycle2(head: ListNode | null): boolean {
  let fast = head;

  while (head && fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) {
      return true;
    }
  }

  return false;
}
