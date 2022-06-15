class user {
    #age;
    #pwd;
    constructor(username, age, pwd) {
        this.username = username;
        this.#age=age;
        this.#pwd=pwd;
    }
}

let user1=new user("Muhammad Imran",'26','12345')
console.log(user1.username);

const username = Symbol("username");
const password = Symbol("pwd")

const user2 = {
    [username] : "Muhammad Imran",
    [password] : "12345"
}

console.log(user2.username);
console.log(user2.password);
