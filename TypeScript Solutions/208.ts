class Trie {
  // key data structure
  // trie is made of nodes
  // each node has a **character** and a dictionary of children nodes
  // In this implementation,
  // a node may have a boolean property `isWord` to indicate if it is the end of a word
  // This is optional, but can be made certain by adding a boolean property to the node
  public root: {
    isWord?: boolean;
    [key: string]: any;
  };

  // initialize the root node, which is empty
  constructor() {
    this.root = {};
  }

  // insert chars of the word one by one. after insert a child node with the char,
  // move to it and continue
  insert(word: string): void {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isWord = true;
  }

  // traverse the node tree and see if the word is in the trie
  search(word: string): boolean {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) {
        return false;
      }
      node = node[c];
    }
    return node.isWord ?? false;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const c of prefix) {
      if (!node[c]) {
        return false;
      }
      node = node[c];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
