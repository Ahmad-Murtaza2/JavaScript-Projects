let boxes=document.querySelectorAll(".box");
let rest=document.querySelector(".reset");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newBtn=document.querySelector(".newbtn")

let turnX=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")
        if(turnX){
            box.innerText="X";
            turnX= false;
        }
        else{
            box.innerText="O";
            turnX= true;
        }
        box.disabled=true;
        checkPattern();
    })
});
const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const showWinner=(w)=>{
    msg.innerHTML=`Congtrats Winner is ${w}`;
    msgCon.classList.remove("hide");
    disableAllBoxes();
}
const checkPattern =()=>{
    for(let pat of winPattern){
        //console.log(pat[0],pat[1],pat[2]);
        //console.log(boxes[pat[0]],boxes[pat[1]],boxes[pat[2]]);
        let p1=boxes[pat[0]].innerText;
        let p2=boxes[pat[1]].innerText;
        let p3=boxes[pat[2]].innerText;

        if(p1 !="" && p2 !="" && p3 !=""){
            if(p1===p2 && p2===p3){
                // console.log("winner",p1);
                showWinner(p1);
                return;
            }
        }

    }
}
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText="";
    });
}

const reset=()=>{
    turnX=true;
    enableBoxes();
    msgCon.classList.add("hide");

    
}

newBtn.addEventListener("click",reset);
rest.addEventListener("click",reset);
