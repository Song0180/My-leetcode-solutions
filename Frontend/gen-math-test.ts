/*
Generate maths tests for pupils.
The question format is a +- b = c with one of the numbers blank,  adding or subtracting.
Make sure a, b, c are all smaller than 20 and larger than 0. 

For example, the output could be like "15 - __ = 6" or "__ + 7 = 12"


Equal probability is favored (doesn't have to be accurate).
*/
// Math.floor
// Math.ceil
// Math.random()

const getRandomIntfrom1to19 = () => {
  return Math.floor(Math.random() * (19 - 1) + 1);
};

const getRandomBoolean = () => {
  return Math.floor(Math.random() * 2) % 2 === 0;
};

const genValidNumbers = () => {
  let operator;
  let isValid = false;
  let num1, num2;

  while (!isValid) {
    num1 = getRandomIntfrom1to19();
    num2 = getRandomIntfrom1to19();
    const sum = num1 + num2,
      diff = Math.abs(num1 - num2);
    if (sum >= 20 && diff === 0) {
      continue;
    } else if (sum >= 20) {
      operator = '-';
      const min = Math.min(num1, num2);
      const max = Math.max(num1, num2);
      return { first: max, second: min, operator, result: diff };
    } else if (diff === 0) {
      operator = '+';
      return { first: num1, second: num2, operator, result: sum };
    } else {
      operator = getRandomBoolean() ? '+' : '-';
      const min = Math.min(num1, num2);
      const max = Math.max(num1, num2);
      return {
        first: operator === '+' ? num1 : max,
        second: operator === '+' ? num2 : min,
        operator,
        result: sum,
      };
    }
  }
};

const genTest = () => {
  // decide operator based on sum and diff;
  // sum >= 20 && diff === 0: get another 2 numbers?
  // sum >= 20: subtract
  // diff === 0: add
  const isFront = getRandomBoolean();

  const { first, second, operator, result } = genValidNumbers();

  return `${isFront ? '__' : first} ${operator} ${
    isFront ? second : '__'
  } = ${result}`;
};

console.log(genTest());
console.log(genTest());
console.log(genTest());
