function canvote(user){
    if (user.age >= 18 && user.ismale === true){
        console.log(user.name + " can vote");
        
    }

    else {
        console.log(user.name + " cannot vote");
    }

    }



let user = [{name : "sanket",age : 21, ismale : true},
    {name : "sara", age : 19, ismale : false},
    {name : "john", age : 17, ismale : true}
]
for (let i = 0; i < user.length; i++){
    canvote(user[i]);
}


// canvote(user[0]);