// // function info (user){
// //     console.log("hi "+"your name is "+ user.name +" and your age is " +user.age )
// // }

// // let user = {
// //     name : "sanket",
// //     age : 20

// // }

// // info(user);

// // -------------------------------------------------
// let username = prompt("Enter your name");
// let ismale = prompt("Are you male? (true/false)");
// let age = prompt("Enter your age");
// let PRE = ["MR","MRS","MS"];

// let userinfoObj = {
//     nav : username,
//     ismale : ismale === "true",
//     age : age,

// }

// function userinfo (user){

//     if (user.ismale === true){
//         console.log(PRE[0] + " " + user.nav + " is " + user.age + " years old");
//     }
   
//     else {
//         console.log(PRE[2] + " " + user.nav + " is " + user.age + " years old");
//     }
// }

// userinfo(userinfoObj);


let person ={

    name: "John",
    age: 30,
    city: "New York"
}

person.country = "USA"; // Adding a new property
console.log(person);

// delete property 
delete person.country;
console.log(person)