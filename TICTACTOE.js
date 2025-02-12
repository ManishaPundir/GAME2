let boxes=document.querySelectorAll(".box");
console.dir(boxes);
let resetBTN=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
    console.log("BOX WAS CLICKED");

    if(turnO){
     box.innerText="0" ;
     turnO=false;  
    }
    else{
     box.innerText="X" ;
     turnO=true;  
    }
    box.disabled=true;

    checkWinner();
});
});




let resetgame=()=>{
    turnO=true;
    
     inableBoxes();
     msgcontainer.classList.add("hide");
}

let disableBoxes=()=>{
  
  for(let box of boxes){
        box.disabled=true;
    }
};


let inableBoxes=()=>{
  
    for(let box of boxes){
          box.disabled=false;
          box.innerText="";
      }
  };
  





const showWinner=(Winner)=>{
//message.innertext =`congratulations winner is ${Winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
}








const checkWinner=()=>{
    for(let pattern  of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

     if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("WINNER", pos1val);
            message.innerText=`CONGRATULATION WINNER IS ${pos1val}`;
            showWinner(pos1val);
        }
        /*else if(pos1val !=pos2val && pos1val ==pos3val){
            message.innerText=`NO ONE WON`; 
            showWinner();
        } */
     }



    }



};


newGameBtn.addEventListener("click", resetgame);
resetBTN.addEventListener("click", resetgame);