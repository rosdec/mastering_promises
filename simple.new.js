const { promise, resolve, reject } = Promise.withResolvers();

Math.random() > 0.5 ? resolve("ok") : reject("not ok");