/* --- VARIABLES --- */
const choices = ["✊", "🤚", "✌️"];
const player1 = document.getElementById("player-1");

const playerChoices = document.querySelectorAll(".player-choice");

let playerChoice;

/* 1a. */
const player2 = document.getElementById("player-2");

/* 1b. */
const resultArea = document.getElementById("result-area");

/* 1c. */
const playBtn = document.getElementById("play-btn");
const againBtn = document.getElementById("again-btn");

/* This will help check your results */
console.log(player1);
console.log(player2);
console.log(resultArea);
console.log(playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

const getPlayerChoice = (choice) => {
  if (choice === "rock") {
    return "✊";
  } else if (choice === "paper") {
    return "🤚";
  } else if (choice === "scissors") {
    return "✌️";
  }
};

const generateChoice = () => {
  // The range of (Math.random() * 3) is from 0 - 2.99 ...
  let r = Math.floor(Math.random() * 3);
  return choices[r];
};

const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultArea.innerHTML = result;
};

const decideWinner = (a, b) => {
  if (
    (a === "✊" && b === "✊") ||
    (a === "🤚" && b === "🤚") ||
    (a === "✌️" && b === "✌️")
  ) {
    /* 3a. */ return "It's a Tie!";
  } else if (
    (a === "✊" && b === "✌️") ||
    (a === "🤚" && b === "✊") ||
    (a === "✌️" && b === "🤚")
  ) {
    /* 3b. */ return "You Win!";
  } else {
    /* 3c. */ return "You Lose!";
  }
};

const play = () => {
  let choice1 = playerChoice;

  if (!choice1) {
    alert("Please choose first.");
    return;
  }

  let choice2 = generateChoice();
  let result = decideWinner(choice1, choice2);

  insertHTML(choice1, choice2, result);

  playBtn.classList.add("hide");
  againBtn.classList.remove("hide");
};

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

/* 2. */
// player1.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.target.dataset.choice);

//   playerChoice = getPlayerChoice(e.target.dataset.choice);
//   console.log(playerChoice);

//   playerChoices.forEach((choice) => {
//     choice.classList.remove("focus");
//     choice.classList.add("dim");
//   });

//   e.target.classList.add("focus");
// });

playerChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerChoice = getPlayerChoice(choice.dataset.choice);
    console.log(playerChoice);

    playerChoices.forEach((choice) => {
      choice.classList.remove("focus");
      choice.classList.add("dim");
    });
    choice.classList.add("focus");
  });
});

playBtn.addEventListener("click", play);

againBtn.addEventListener("click", () => location.reload());

/* ------------------------------- */
