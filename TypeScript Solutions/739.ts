// O(n^2) brute force
function dailyTemperatures(temperatures: number[]): number[] {
  const hash = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i] && hash[i] === 0) {
        hash[i] = j - i;
        break;
      }
    }
  }
  return hash;
}

// O(n) with stack
// Store currently unsolved elements,
// later if there is a bigger number,
// withdraw the unsolved elements and get the answer.
function dailyTemperatures2(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0);
  const stack: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const idx = stack.pop()!;
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}
