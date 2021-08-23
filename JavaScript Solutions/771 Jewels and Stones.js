// O(m+n)
var numJewelsInStones = function (jewels, stones) {
  const jwlMap = {};
  for (let i = 0; i < jewels.length; i++) {
    jwlMap[jewels[i]] = true;
  }
  let sum = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in jwlMap) {
      sum++;
    }
  }
  return sum;
};

// neater implementation
const numJewelsInStones = (jewels, stones) => {
  const jwlMap = new Set(jewels);
  return stones.split('').reduce((acc, cur) => {
    return acc + (jwlMap.has(cur) ? 1 : 0);
  }, 0);
};
