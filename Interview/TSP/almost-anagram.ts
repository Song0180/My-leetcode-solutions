// Two words make an Almost Anagram Pair if you can transform one into the other by switching out one letter and rearranging the letters if needed.

// Examples of Almost Anagram Pairs:
// - dark, card
// - plate, table
// - lead, read

// Examples of non-Almost Anagrams Pairs:
// - care, free (2 different letters)
// - stop, pots (no different letters)
// - ply, play (different lengths)

// Write a program that takes in the
// i) number of words (N)
// ii) list of N words
// and outputs the same list where next to each word we have the number of Almost Anagram Pairs it can form with the other words in the list.

// The first line of the input is the number of words (N) and the following N lines are the words in that list.

// The number of words in the list range from 5 to 50000. You can assume that all the words are unique, lowercase and at least 2 letters long.

// Sample Input:

// 10
// race
// beat
// brass
// grass
// sabre
// back
// chat
// cabs
// saga
// pack

// Output:
// race 0
// beat 0
// brass 2
// grass 1
// sabre 1
// back 2
// chat 0
// cabs 1
// saga 0
// pack 1

// {
//   back
//   abck
//   abc
//   abk
//   ack

// }

const countAlmostAnagram = (words: string[]) => {
  const map = {};

  for (const word of words) {
    if (Object.keys(map).length > 0) {
      for (const key of Object.keys(map)) {
        if (key.length === word.length) {
          const keyCopy = key.split('');
          const wordCopy = word.split('');

          const countMap = {};

          for (const char of keyCopy) {
            if (char in countMap) {
              countMap[char]++;
            } else {
              countMap[char] = 1;
            }
          }

          for (const char of wordCopy) {
            if (char in countMap) {
              countMap[char]++;
            } else {
              countMap[char] = 1;
            }
          }

          let diff = 0;

          for (const [key, value] of Object.entries(countMap)) {
            /*             console.log(value); */
            if (value === 1) {
              diff++;
            }
          }

          if (diff <= 2) {
            map[key]++;
            map[word] = 1;
          } else {
            if (!(word in map)) {
              map[word] = 0;
            }
          }
        } else {
          if (!(word in map)) {
            map[word] = 0;
          }
        }
      }
    } else {
      map[word] = 0;
    }
  }

  const result: string[] = [];

  for (const [key, value] of Object.entries(map)) {
    result.push(`${key} ${value}`);
  }

  return result;
};

const countAlmostAnagramDP = (words: string[]) => {};
const testArr = [
  'race',
  'beat',
  'brass',
  'grass',
  'sabre',
  'back',
  'chat',
  'cabs',
  'saga',
  'pack',
];

console.log(countAlmostAnagram(testArr));
