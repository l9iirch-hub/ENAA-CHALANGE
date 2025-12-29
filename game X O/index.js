// Get HTML elements
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");
// const popup = document.getElementById("popup");
// const popupText = document.getElementById("popupText");


// Winning combinations
const winConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// Game variables
let board = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";

let currentPlayer = "O";
let gameRunning = true;

// Start the game
startGame();

function startGame() {
  // Add click event to each cell
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => cellClicked(cell, index));
  });

  // Restart button
  restartBtn.addEventListener("click", restartGame);

  statusText.textContent = `${currentPlayer}'s turn`;
}

// When a cell is clicked
function cellClicked(cell, index) {
  // Check if cell is empty and game is running
  if (board[index] !== "" || !gameRunning) return;

  // Update board and UI
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  checkWinner();
}

// Check if there is a winner
function checkWinner() {
  let win = false;

  for (let condition of winConditions) {
    let a = board[condition[0]];
    let b = board[condition[1]];
    let c = board[condition[2]];

    if (a && a === b && b === c) {
      win = true;
      break;
    }
  }

//   if (win) {
//   popupText.textContent = `${currentPlayer} winsssssss`;
//   popup.classList.remove("hidden");
//   gameRunning = false;
// }
    if (win) {
    statusText.textContent = `${currentPlayer} wins!`;
    gameRunning = false;
  }

  else if (!board.includes("")) {
    statusText.textContent = "Draw!";
    gameRunning = false;
  } 
  else {
    changePlayer();
  }
}
function closePopup() {
  popup.classList.add("hidden");
}

// Change player
function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}

// Restart the game
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
//   currentPlayer = "X";'
  currentPlayer = "O";
  gameRunning = true;

  cells.forEach(cell => cell.textContent = "");
  statusText.textContent = `${currentPlayer}'s turn`;
//    popup.classList.add("hidden");
}
