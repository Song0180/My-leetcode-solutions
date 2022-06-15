// Definition for Node.
class Node1 {
  val: number;
  next: Node1 | null;
  random: Node1 | null;
  constructor(val?: number, next?: Node1, random?: Node1) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node1 | null): Node1 | null {
  if (head === null) {
    return head;
  }

  const copy = new Node1(head.val, copyRandomList(head.next), head.random);

  return copy;
}

function copyRandomList2(head: Node | null): Node | null {
  if (head === null) {
    return head;
  }

  const randomIndexMap = []; // this map cannot be found trivially
  const map = [];
  let index = 0;

  let original = head;

  while (original !== null) {
    const cur = new Node(original.val, null, null);
    if (index > 0) {
      const prevIndex = index - 1;
      map[prevIndex].next = cur;
    }
    map.push(cur);
    index++;
    original = original.next;
  }

  (original = head), (index = 0);

  while (original !== null) {
    if (original.random !== null) {
      map[index].random = map[randomIndexMap[index]];
    }
    index++;
    original = original.next;
  }

  return map[0];
}

// interweaving; 3 pass O(n)
function copyRandomList(head: Node | null): Node | null {
  if (head === null) {
    return head;
  }

  let original = head;

  while (original !== null) {
    const copy = new Node(original.val);
    copy.next = original.next;
    original.next = copy;
    original = original.next.next;
  }

  original = head;

  while (original !== null) {
    const originalRandom = original.random;
    const copiedNode = original.next;
    if (originalRandom !== null) {
      copiedNode.random = originalRandom.next;
    }
    original = original.next.next;
  }

  original = head;
  const dummyHead = new Node();
  let copyIter = dummyHead;

  while (original !== null) {
    const nextOriginal = original.next.next;
    const copiedNode = original.next;
    original.next = nextOriginal;
    original = nextOriginal;
    copyIter.next = copiedNode;
    copyIter = copiedNode;
  }

  return dummyHead.next;
}

// O(n)
function copyRandomList(head: Node | null): Node | null {
  const oldToNewMap = new Map();
  const dummyHead = new Node();

  let curr = head;
  let prev = dummyHead;

  // build up a dictionary of a oldNode -> newNode
  // and link next pointers of prev new node to curr new node
  while (curr) {
    const newNode = new Node(curr.val);

    // make sure we only add it once in case there is a cycle
    if (!oldToNewMap.has(curr)) {
      oldToNewMap.set(curr, newNode);
    }

    prev.next = newNode;
    prev = newNode;
    curr = curr.next;
  }

  // iterate all the old nodes and transfer the random pointers
  // to the new node version of the random pointers
  for (let key of oldToNewMap.keys()) {
    const newNode = oldToNewMap.get(key);
    newNode.random = oldToNewMap.get(key.random);
  }

  // return the new head
  return oldToNewMap.get(head);
}

// own implementation O(n)
function copyRandomList(head: Node | null): Node | null {
  const oldToNewMap = new Map();
  const dummyHead = new Node();

  let cur = head,
    prev = dummyHead;

  while (cur) {
    const copy = new Node(cur.val);

    if (!oldToNewMap.has(cur)) {
      oldToNewMap.set(cur, copy);
    }

    prev.next = copy;
    prev = copy;
    cur = cur.next;
  }

  for (const key of oldToNewMap.keys()) {
    const copy = oldToNewMap.get(key);
    copy.random = oldToNewMap.get(key.random);
  }

  return dummyHead.next;
}
