
const cancellablePromise = () => {
    const { promise, resolve, reject } = Promise.withResolvers();

    promise.cancel = () => {
        reject("the promise got cancelled");
    };
    return promise;
};


// -------------------- USAGE ---------------------------
//  CANCELLING THE PROMISE
const newCancellablePromise = cancellablePromise();

newCancellablePromise.then(console.log);
newCancellablePromise.catch(console.log);

setTimeout(() => newCancellablePromise.cancel(), 200) // cancels before the resolution the promise 

// output 
// the promise got cancelled

// -------------------- USAGE ---------------------------
//  THE PROMISE GETS REJECTED BECAUSE OF ERROR

const newCancellablePromise2 = cancellablePromise();

newCancellablePromise2.then(console.log);
newCancellablePromise2.catch(console.log);

setTimeout(() => newCancellablePromise2.cancel(), 2000) // cancels before the resolution the promise

// output 
// rejected because of error