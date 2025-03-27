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

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Anshika", email: "canshsu@gmail.com" });
        }
        else {
            reject("ERROR: Warning Message");
        }
    }, 1000)
});

promiseFour.then(function (user) {
    console.log(user);
    return user.username;
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("The promise is resolved or rejected");
})

const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", Password: "1234" });
        }
        else {
            reject("ERROR: Warning Message 2");
        }
    }, 1000)
});

// promiseFive.then(function(){

// }) similar different method async wait
async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumepromiseFive();