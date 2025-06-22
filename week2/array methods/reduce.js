//------0-------------x----------------x--------------0
        // 📘 .reduce() in JavaScript – Notes
        // ✅ Syntax:
        // js
        // Copy
        // Edit
        // array.reduce((accumulator, currentValue) => { 
        //   return updatedAccumulator 
        // }, initialValue)
        // 🔑 Key Points:
        // accumulator:
        // Stores the result of the previous computation (or starts from initialValue if provided).

        // currentValue:
        // The current element being processed in the array.

        // initialValue (optional):

        // If provided → accumulator starts from initialValue.

        // If not provided → accumulator starts from the first element of the array, and iteration begins from the second element.

        // 🧪 Examples:
        // ✅ Example 1: With initialValue
        // js
        // Copy
        // Edit
        // const arr = [10, 20, 30];
        // const sum = arr.reduce((acc, val) => acc + val, 0);
        // console.log(sum); // 60
        // acc starts at 0 → 0 + 10 + 20 + 30 = 60

        // ⚠️ Example 2: Without initialValue
        // js
        // Copy
        // Edit
        // const arr = [10, 20, 30];
        // const sum = arr.reduce((acc, val) => acc + val);
        // console.log(sum); // 60
        // acc starts at 10 (first element)
        // Only adds 20 + 30 → 10 + 20 + 30 = 60

        // Same result here, but dangerous if array is empty.

        // ⚠️ Edge Case: Empty Array
        // js
        // Copy
        // Edit
        // [].reduce((acc, val) => acc + val); // ❌ TypeError
        // You must provide an initialValue if the array is empty.

        // 💡 Best Practice:
        // ✅ Always provide initialValue unless you’re sure the array has at least one element.



// ---------0 -----------------x----------------x--------------0





// let arr = [10,20,200,300,450];
// let sum = arr.reduce(summ,0);  //0 = initial value for accumulator

// function summ (accumulator, currentValue) {
//     return accumulator + currentValue;
// }   

// console.log(sum);

//0-----------------OR=-------------

let arr = [10,20,30,40,50];
let accum = 2;

let sum = arr.reduce((accum , curreval ) =>{
    return accum + curreval;
}) ; // 0 = initial value for accumulator

// console.log(sum);




let students = [
  { name: "Sanket", marks: 88 },
  { name: "Varad", marks: 72 },
  { name: "Kabeer", marks: 35 },
  { name: "Neha", marks: 90 },
  { name: "Riya", marks: 38 }
];

let names = students.map(s => s.name);
// console.log(names)

let pass = students.filter(marks => marks.marks > 88);
console.log(pass);

