// User Class
class User {
    static counter = 0;
    constructor(name, email, password) {
        this.id = ++User.counter;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// User List (Class) - local storage
class UserList {
    static userList = [];
    static addUser(user) {
        this.userList.push(user);
    }
    static getUser(id) {
        return this.userList.find(user => user.id == id);
    }
    static deleteUser(id) {
        this.userList = this.userList.filter(user => user.id != id);
    }
    static updateUser(id, user) {
        let userIndex = this.userList.findIndex(user => user.id == id);
        this.userList[userIndex] = user;
    }
    static saveUserList() {
        localStorage.setItem("userList", JSON.stringify(this.userList));
    }
    static loadUserList() {
        this.userList = JSON.parse(localStorage.getItem("userList"));
        if (this.userList == null) {
            this.userList = [];
        }
    }
}

// Authentication Class - local storage
class Authentication {
    static login(email, password) {
        let user = UserList.userList.find(user => user.email == email && user.password == password);
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            return true;
        }
        return false;
    }
    static logout() {
        localStorage.removeItem("user");
    }
    static isLogin() {
        return localStorage.getItem("user") != null;
    }
    static getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}