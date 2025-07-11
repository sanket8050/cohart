
// function asyncsFunct(){
//     return new Promise((resolve,result)=>{
//         setTimeout(() =>{
//             console.log("some data");
//         resolve("successs");
//         },4000);
        
//     }) ;
// }

// console.log("fetching data.......");
// let p1 = asyncsFunct();
// p1.then((res) =>{
//     console.log(res);
// })

//--------------promise chain.👇👇👇----------
function getData(dataid){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data ",dataid)
            resolve("sucess")
        },2000);
    });
}

getData(1).then((res)=>{
 
    return getData(2);
    
 }).then((res)=>{
    return getData(3);
 }).then((res)=>{
    console.log(res);
 })














// let promise = new Promise(( )=>{
//     console.log("i am a promise")
//     // reject(3);
//     resolve(2);
    
// })

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am promis");
//         resolve("success");
//         // reject("err")
//     })
// }

// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fulfilled")
// })


// promise.catch((err)=>{
//     console.log("error")
// })