// // ✅ Closures
// // A closure is a function that remembers the variables from its outer function even after the outer function has finished running.

// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     };
   
// }

// const a = outer();
// const b = outer();
// a();
// a();
// a();

// b();
// b();
// b();


// | Type                 | Hoisted | Has its own `this` | Executes Immediately |
// | -------------------- | ------- | ------------------ | -------------------- |
// | Function Declaration | ✅ Yes   | ✅ Yes              | ❌ No                 |
// | Arrow Function       | ❌ No    | ❌ No               | ❌ No                 |
// | Function Expression  | ❌ No    | ✅ Yes              | ❌ No                 |
// | Closure              | ❌ No    | ✅ Yes              | ❌ No                 |
// | IIFE                 | ❌ No    | ✅ Yes / ❌        |  ✅ Yes                |

// ------------------real world example---------------

function clickHandler(color){

    return function(){

        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("green").onclick = clickHandler("green")
document.getElementById("org").onclick = clickHandler("orange")