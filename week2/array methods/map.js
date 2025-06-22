let arr1 = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr1.map((num,ad) => {
    return num + ad; //ad is index of the element in the array
});

console.log(newArr); // [  1,  3,  5,  7,  9,  11, 13, 15, 17, 19 ]


 


let original = [1,2,3,4,5 ];
let double = original.map((num) => {
    return num * 2;
});
console.log(double); // [2, 4, 6, 8, 10]

let arr = [100, 200 , 300];

let newarr = arr.map(price => "₹" + price);
console.log(newarr); // ["₹100", "₹200", "₹300"]

// mapping in objects

let users = 
[    {name: "sanket", age: 21, ismale: true},
     {name: "sara", age: 19, ismale: false},
     {name: "john", age: 17, ismale: true}
];  

let userage = users.map(user => user.age);
console.log(userage); // [21, 19, 17]