// const promiseone = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task 1");
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log("Resolved");
// });

// Q or Bluebird was used before Promises

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography,network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000)

})

promiseOne.then(function () {
    console.log("Promise consumed");
})
// .then directly connection with resolve

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is completed');
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed");
})

const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve({ username: "Anshika", email: "canshsu@gmail.com" });
    }, 1000)

})

promiseFour.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve({ username: "Anshika", email: "canshsu@gmail.com" });
    }, 1000)

})

promiseThree.then(function (user) {
    console.log(user);
})