// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("200");
//             resolve(200)
//         },2000)
//     })
// }

// async function getwhether(){
//     await api();
// }


function getdata(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data " , id);
            resolve("err");
        },2000)
    })
}

async function get(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
    await getdata(5);
}