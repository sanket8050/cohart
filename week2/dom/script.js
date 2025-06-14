const heading = document.getElementById("heading");
const button = document.getElementById("btn");

let othello = false;


button.addEventListener("click" , () => {       //first click

    if(!othello){
        heading.textContent = "u r stan"
        othello = true;
    }
    else{
        heading.textContent = "U R OTHELLO"
        othello = false
    }

       
});