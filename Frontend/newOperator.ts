const myNew = (func: Function, ...args) => {
  let newInstance = {};
  newInstance.__proto__ = func.prototype;
  const res = func.apply(newInstance, args);
  return res instanceof Object ? res : newInstance;
};
