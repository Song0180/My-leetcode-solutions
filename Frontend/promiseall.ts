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
