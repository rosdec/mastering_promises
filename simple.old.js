let resolve, reject;

const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

Math.random() > 0.5 ? resolve("ok") : reject("not ok");