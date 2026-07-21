

let playerOne = document.querySelector(".playerOne");
let inputOne = document.querySelector(".inputOne");
let buttonOne = document.querySelector(".buttonOne");
let errorOne = document.querySelector(".errorOne");


let playerTwo = document.querySelector(".playerTwo");
let inputTwo = document.querySelector(".inputTwo");
let buttonTwo = document.querySelector(".buttonTwo");
let errorTwo = document.querySelector(".errorTwo");
let chance = document.querySelector(".chance")

let count = 3;

chance.innerHTML = `Chance ${count}`;

buttonOne.addEventListener("click", ()=>{
  if(!inputOne.value){
    errorOne.innerHTML="Enter something"
  } else if(isNaN(inputOne.value)){
    errorOne.innerHTML="Enter a number: "
  } else if(inputOne.value<1 || inputOne.value>10){
    errorOne.innerHTML="Enter a number 1 to 10"
  } else {
    playerOne.style.display="none"
    inputOne.style.display="none"
    buttonOne.style.display="none"
    errorOne.style.display="none"


    playerTwo.style.display="block"
    inputTwo.style.display="inline-block"
    buttonTwo.style.display="inline-block"
    errorTwo.style.display="block"
    chance.style.display="block"
  }
})


buttonTwo.addEventListener("click", ()=>{
  if(!inputTwo.value){
    errorTwo.innerHTML="Enter something"
  } else if(isNaN(inputTwo.value)){
    errorTwo.innerHTML="Enter a number: "
  } else if(inputTwo.value<1 || inputTwo.value>10){
    errorTwo.innerHTML="Enter a number 1 to 10"
  } else{
    if(count>1) {
      count--;
      chance.innerHTML = `Chance ${count}`;
      if(inputOne.value==inputTwo.value){
        playerTwo.innerHTML="Player Two is Won !!!"
        buttonTwo.style.display="none"
      }
    } else{
      count = 0;
      chance.innerHTML = `Chance ${count}`;
      playerTwo.innerHTML="Player One is Won !!!"
      buttonTwo.style.display="none"
    }
  }
})