const sum = (...args) => {
  return args.reduce((acc, cur) => acc + cur, 0);
};

const sortFn = (...args) => {
  return args.sort((a, b) => a - b);
};

const curry = function (fn: Function) {
  // store all arguments in all stages
  const args: any[] = [];
  return function result(...rest) {
    // if no args passed, execute
    if (rest.length === 0) {
      return fn(...args);
    }
    // if args, push to the storage array
    args.push(...rest);
    // continue to return this function
    return result;
  };
};

console.log(curry(sum)(1)(2)(3)());
console.log(curry(sortFn)(3)(1)(4)());
