let boxes = document.querySelectorAll(".box");
let resetbtm = document.querySelector("#rst-btn");
let newgame = document.querySelector("#newgame");
let msgcont = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO =  true ;//player x. player o

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click" ,() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
            
        
    });
});

const showwinner = (winner) =>{
    msg.innerText = `Congratulations ,winner is  ${winner}`;
    msgcont.classList.remove("hide");
}
const checkwinner = () =>{
    for(let  pattern of winpattern ){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){
            console.log("winner", pos1);
            showwinner(pos1);
            // Optionally, disable all boxes after win
            boxes.forEach(box => box.disabled = true);
            break;
        }
    }
};