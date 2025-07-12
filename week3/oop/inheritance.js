// class parent {
//     sleep(){
//         console,log("sleeping");
//     }
//     eat(){
//         console.log("eat")
//     }
// }

// const { use } = require("react");

// class child extends parent{
//     engineering(){
//         console.log("i am an engineer")
//     }
// }



// for check in console 

// const obj = new parent()
// obj 

//--------------------------------------------------------------


class User {
    constructor(username) {
        this.username = username;
    }   

    logme() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass) {
        super(username); // call parent class constructor
        this.email = email;
        this.password = pass;
    }
}

const chai = new Teacher("sanket", "@", "1212");
chai.logme();  // Output: Username is sanket
