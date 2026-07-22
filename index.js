

let playerOneContainer = document.querySelector(".playerOneContainer")
let playerTwoContainer = document.querySelector(".playerTwoContainer")

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

buttonOne.addEventListener("click", ()=>{
  if(!inputOne.value){
    errorOne.innerHTML="Enter something...."
  } else if(isNaN(inputOne.value)){
    inputOne.value = "";
    errorOne.innerHTML="Enter a number.... "
  } else if(inputOne.value<1 || inputOne.value>10){
    inputOne.value = "";
    errorOne.innerHTML="Guess between 0 and 10"
  } else {
    playerOneContainer.style.display="none"


    playerTwo.style.display="block"
    inputTwo.style.display="inline-block"
    buttonTwo.style.display="inline-block"
    errorTwo.style.display="block"
    chance.innerHTML = `Chance: ${count}`;
  }
})


buttonTwo.addEventListener("click", () => {
  if (!inputTwo.value) {
    errorTwo.innerHTML = "Enter something....";
  } else if (isNaN(inputTwo.value)) {
    errorTwo.innerHTML = "Enter a number.... ";
  } else if (inputTwo.value < 0 || inputTwo.value > 10) {
    errorTwo.innerHTML = "Guess between 0 and 10";
  } else {
    if (inputOne.value === inputTwo.value) {
      playerTwo.innerHTML = "Congratulations! You Won 🏆";
      buttonTwo.style.display = "none";
      chance.style.display = "none";
    } else {
      count--;
      chance.innerHTML = `Chance ${count}`;
      if (count === 0) {
        playerTwo.innerHTML = "Game Over 💀 !!!";
        buttonTwo.style.display = "none";
      } else {
        errorTwo.innerHTML = "Wrong Guess! Try Again.";
      }
    }
  }
});

buttonTwo.addEventListener("click", () => {
  inputTwo.value= "";
});
// buttonOne.addEventListener("click", () => {
//   inputOne.innerText= "";
// });
