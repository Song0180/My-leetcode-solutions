// 手写Promise.all
Promise.prototype._all = (promiseList: Promise<any>[]) => {
  return new Promise((resolve, reject) => {
    const values: any[] = [];
    promiseList.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (res) => {
          values.push(res);
          if (promiseList.length === values.length) {
            resolve(values);
          }
        },
        (err) => reject(err)
      );
    });
  });
};

/**
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 */
