const promiseone = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 1");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Resolved");
});
