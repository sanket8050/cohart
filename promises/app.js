// function callback(){
//     console.log("3 sec passed");
// }

// setTimeout(5000).then(callback);


// function waitfor3sec(resolve){
//     console.log(resolve);
//     setTimeout(resolve,2000);
// }

// function main(){

//     console.log("sanket");
// }

// waitfor3sec(main);




function main(){
    console.log("sanket");
}

function setpromisified(){
    return new Promise(waitfor);
}

function waitfor(resolve){
    setTimeout(resolve,5000);
    

}

setpromisified().then(main)