// Definition for Node.
class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// Solution using bfs and hashmap
// time complexity: O(n+e) e:edges (adjacency list) (if ajacency array, O(n^2))
// space complexity: O(n): size for queue, visited set and hashmap
function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;

  const q = [node];
  const visited = new Set<number>();
  visited.add(node.val);

  const cloned = new Map<number, Node>();
  cloned.set(node.val, new Node(node.val));

  while (q.length > 0) {
    const curNode = q.shift()!;
    if (!cloned.has(curNode.val)) {
      cloned.set(curNode.val, new Node(curNode.val));
    }
    const curClone = cloned.get(curNode.val);
    for (const neighbor of curNode.neighbors) {
      if (cloned.has(neighbor.val)) {
        const clonedNeighbor = cloned.get(neighbor.val);
        curClone.neighbors.push(clonedNeighbor);
        clonedNeighbor.neighbors.push(curClone);
      }
      if (!visited.has(neighbor.val)) {
        visited.add(neighbor.val);
        q.push(neighbor);
      }
    }
  }

  return cloned.get(node.val);
}

// simplified version - get rid to visited set
function cloneGraphSimple(node: Node | null): Node | null {
  if (!node) return null;

  const q = [node];
  const cloned = new Map<number, Node>();
  cloned.set(node.val, new Node(node.val));

  while (q.length > 0) {
    const curNode = q.shift()!;
    const curClone = cloned.get(curNode.val);
    for (const neighbor of curNode.neighbors) {
      if (!cloned.has(neighbor.val)) {
        cloned.set(neighbor.val, new Node(neighbor.val));
        q.push(neighbor);
      }
      curClone.neighbors.push(cloned.get(neighbor.val));
    }
  }
  return cloned.get(node.val);
}

// dfs approach
const cloneGraph3 = (node: Node | null): Node | null => {
  if (node === null) {
    return null;
  }
  const clone = new Node(node.val);
  const visited: (Node | null)[] = [];
  dfs(node, clone, visited);
  return clone;
};

const dfs = (
  node: Node | null,
  curCopy: Node | null,
  visited: (Node | null)[]
) => {
  visited[curCopy.val] = curCopy;

  for (const neighbor of node.neighbors) {
    if (!visited[neighbor.val]) {
      const newNode = new Node(neighbor.val);
      curCopy.neighbors.push(newNode);
      dfs(neighbor, newNode, visited);
    } else {
      curCopy.neighbors.push(visited[neighbor.val]);
    }
  }
};
