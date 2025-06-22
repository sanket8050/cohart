function getDate(dataid , nextdata){
    setTimeout(()=>{
        console.log("data " , dataid)
        if(nextdata){
            nextdata();
        }
    },2000)
}

getDate(1,()=>{
    getDate(2,()=>{
        getDate(3,()=>{
            getDate(4,()=>{
                
            })
        })
    })
})