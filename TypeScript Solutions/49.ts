function groupAnagrams(strs: string[]): string[][] {
  const hashmap = {};

  // O(nm)
  for (const word of strs) {
    // O(m), where m is the length of the word
    let count = new Array(26).fill(0);
    for (let char of word) count[char.charCodeAt(0) - 97]++;
    let key = count.join('#');

    if (hashmap[key]) {
      hashmap[key].push(word);
    } else {
      hashmap[key] = [word];
    }
  }

  return Object.values(hashmap);
}
