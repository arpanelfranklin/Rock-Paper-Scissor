let choices = document.querySelectorAll(".choice");
let result = document.querySelector(".result");
let resultp = document.querySelector(".resultp");

let userPoint = 0;
let compPoint = 0;
let userPoints = document.querySelector("#us");
let compPoints = document.querySelector("#cs");

choices.forEach((e) => {
  e.addEventListener("click", () => {
    let userChoice = e.getAttribute("id");
    playgame(userChoice);
  });
});

const getComputerChoice = () => {
  options = ["Rock", "Paper", "Scissor"];
  let c = Math.floor(Math.random() * 3);
  return options[c];
};
const drawcheck = (userChoice, compChoice) => {
  if (userChoice == compChoice) {
    result.innerHTML = "<p>Match Draw</p>";
    result.style.backgroundColor = "yellow";
  } else {
    result.innerHTML = "<p>Match not Draw</p>";
    Winner(userChoice, compChoice);
  }
};

const Winner = (userChoice, compChoice) => {
  let userWinner = true;
  if (userChoice === "Rock") {
    userWinner = compChoice === "Paper" ? false : true;
  } else if (userChoice === "Paper") {
    userWinner = compChoice === "Scissor" ? false : true;
  } else if (userChoice === "Scissor") {
    userWinner = compChoice === "Rock" ? false : true;
  }

  if (userWinner) {
    result.innerHTML = `<p>You Won yayy! your ${userChoice} beats ${compChoice}</p>`;
    result.style.backgroundColor = "green";
    userPoint += 1;
    userPoints.innerText = userPoint;
  } else {
    result.innerHTML = `<p>You lost!  ${compChoice} beats your ${userChoice}</p>`;
    result.style.backgroundColor = "red";
    compPoint += 1;
    compPoints.innerText = compPoint;
  }
};

const playgame = (userChoice) => {
  let compChoice = getComputerChoice();
    drawcheck(userChoice, compChoice);
};
