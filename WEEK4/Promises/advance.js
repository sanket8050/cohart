// const promise0ne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("logged");
        
//         resolve();
//     }, 1000);
// });

// promise0ne().then(function(){
//     console.log("consumed")
// })


    const  promise_two = new Promise(function(resolve,reject){

        setTimeout(function(){
            try {
                resolve({username:"same",email:"sanket@gmail.com"})
            } catch (error) {
                console.log("sankrt")
            }
        },1000)
    });

    promise_two.then(function(username){
        console.log(username)
    })

    async function name1() {
        try {
            const s = await promise_two
        console.log(s)
        } catch (error) {
            console.log(Error)
            
        }

        
    }

    name1();


    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
