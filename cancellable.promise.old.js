const promise = new Promise((res, rej) => {
    setTimeout(() => rej("rejected because of error"), 1000);
});

const cancellablePromise = (promise) => {
    let rejectFn;
    const newPromise = new Promise((res, rej) => {
        rejectFn = rej;
        promise
            .then(res)
            .catch(rej);
    });
    newPromise.cancel = () => {
        rejectFn("the promise got cancelled");
    };
    return newPromise;
};


// -------------------- USAGE ---------------------------
//  CANCELLING THE PROMISE
const newCancellablePromise = cancellablePromise(promise);

newCancellablePromise.then(console.log);
newCancellablePromise.catch(console.log);

setTimeout(() => newCancellablePromise.cancel(), 200) // cancels before the resolution the promise 

// output 
// the promise got cancelled

// -------------------- USAGE ---------------------------
//  THE PROMISE GETS REJECTED BECAUSE OF ERROR

const newCancellablePromise2 = cancellablePromise(promise);

newCancellablePromise2.then(console.log);
newCancellablePromise2.catch(console.log);

setTimeout(() => newCancellablePromise2.cancel(), 2000) // cancels before the resolution the promise

// output 
// rejected because of error