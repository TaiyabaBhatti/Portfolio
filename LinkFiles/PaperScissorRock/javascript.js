const moveButton = document.getElementById("move-btn"); 
const player=document.getElementById("playerOne");
const computer=document.getElementById("playerTwo");
let scorePlayer=player.getElementsByClassName("score");
let scoreComputer=computer.getElementsByClassName("score");
let s1=0;
let s2=0;
let options=document.querySelectorAll(".opt");



const draw = () => {
    // moveButton.innerText="It was Draw.";
        // moveButton.style.backgroundColor=" #1a1d45";
}





const showWinner=(winner,user,computer) => {

if(winner){
    moveButton.innerText=`You won! ${user} beats ${computer}.`;
    s1++;
    scorePlayer[0].innerText=s1;
    moveButton.style.backgroundColor="green";
}
else{
    moveButton.innerText=`You lost. ${computer} beats ${user}.`;
    s2++;
    scoreComputer[0].innerText=s2;
    moveButton.style.backgroundColor="red";
}



};



const array=["scissor","paper","rock"];
const comGenet=() => {
    let randomNumber=Math.floor(Math.random()*3);
    return array[randomNumber];
};

const playGame = (userChoice) => {
    // computer generate
    const comChoice=comGenet();
    if(userChoice===comChoice){
    // draw
    moveButton.innerText="It was Draw";
    moveButton.style.backgroundColor=" #1a1d45";
    }
 else{
    let userWin=true;
    if(userChoice==="rock"){
       userWin=comChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=comChoice==="rock"?true:false;
    }
    else if(userChoice==="scissor"){
        userWin=comChoice==="paper"?true:false;
    }
         showWinner(userWin,userChoice,comChoice);
 }


}



options.forEach((opt) => {
opt.addEventListener("click",() => {
    const choice=opt;
    const userChoice=choice.getAttribute("id");
     playGame(userChoice);
});
});



























