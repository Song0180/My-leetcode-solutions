const deepClone = (target: Array<any> | Object) => {
  const copy = target instanceof Array ? [] : {};

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      copy[key] =
        typeof target[key] === 'object' ? deepClone(target) : target[key];
    }
  }

  return copy;
};
