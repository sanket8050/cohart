const randColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
    // console.log(color);
};

let  x 
function startChangingColor(){

    if(!x){
        x = setInterval(changing,500 );
    }

    function changing(){
        document.body.style.backgroundColor = randColor()
    }
};
function stopChangingColor(){
    clearInterval(x);
    x = null;
};
document.getElementById("start").addEventListener('click',startChangingColor);
document.getElementById("stop").addEventListener('click',stopChangingColor);


