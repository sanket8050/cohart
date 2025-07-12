// class user{
//     constructor(username,email,phone){
//         this.username = username;
//         this.email = email;
//         this.phone = phone
//     }

//     encryptPassword(){
//         return `${this.username}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new user("chai","chai@","45645");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());



// behind the scene

function user(username,email,phone){
    this.username = username;
    this.email = email;
    this.phone = phone
}

user.prototype.encryptPassword = function(){
    return `${this.username}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("sanket", "sanket@", "21223")

console.log(tea.encryptPassword())
console.log(tea.changeUserName())