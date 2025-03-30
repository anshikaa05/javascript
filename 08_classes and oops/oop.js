const User = {
    username: "Anshika",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function () {
        console.log("Done");
        console.log(`Username is: ${this.username}`);
    }

}

// console.log(User.username);
// console.log(User.getUserDetail());

function user(username, loginCount, issLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.issLoggedin = issLoggedin;
}

const calling = new user("Anshika", 9, true);
console.log(calling);
