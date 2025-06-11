// //What is .filter()?
// .filter() is used to remove unwanted elements from an array based on a condition.
// It returns a new array with only those elements that pass the test.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenf = arr1.filter(num => num %2 === 0);

console.log(evenf); // [2, 4, 6, 8, 10]

let scores = [10,20,30,40,50,6,0];

let high = scores.filter(scorer=> scorer >= 44);
console.log(high); // [50, 44]

// filtering in objects
let users =  [ {name: "sanket", age: 21, ismale: true},
    {name: "sara", age: 19, ismale: false},
    {name: "john", age: 17, ismale: true}
];
let maleUsers = users.filter(user => user.ismale === true);
console.log(maleUsers); // [{name: "sanket", age: 21, ismale: true}, {name: "john", age: 17, ismale: true}]