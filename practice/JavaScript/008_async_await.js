function promiseFunc() {
    return new promise((resolve, reject) => {
        resolve("Promise is awesome");
    });
};
promiseFunc().then(console.log(resolve));