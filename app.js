// <<<<<<<<< Test code >>>>>>>>>>

// let img = document.querySelector('#your-default');
// let playerPick = null;

// // Function to handle button click event
// function handleButtonClick(event) {
//   // Get the clicked button
//   const button = event.target;
  
//   // Set the image source based on the clicked button
//   img.setAttribute('src', `./imgs/${button.id}.png`);
//   //store player pick to a global variable
//   playerPick = button.value;
// }

// // Get all the buttons
// let buttons = document.querySelectorAll('.button');

// // Add event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', handleButtonClick);
// });

// let compImg = document.querySelector('#ai-default')
// let compPick = null;
// const choices = ['rock', 'paper', 'scissors'];

// let message = document.getElementById('message');

// //get the scores
// let playerTotalScore = document.getElementById('your-score');

// //Function to start the game
// function startRound(){

// 	//Generate computer's pick using Math.random()
// 	const aiPick = choices[Math.floor(Math.random() * 3)];
// 	//store computer's pick to a global variable
// 	compPick = aiPick;

// 	// Set the image source based on the computer's pick
//   	compImg.setAttribute('src', `./imgs/${aiPick}.png`);

//   	//see who's the winner
//   	message.textContent = evaluate();

//   	//display the appropriate button
//   	startBtn.style.display = "none";
//   	restartBtn.style.display = "inline-block";

//   	restartBtn.addEventListener('click', restart);
// }

// //Get the play restart container
// let btnContainer = document.getElementById('play-restart');

// //Get the start button
// const startBtn = document.getElementById('play-btn');
// startBtn.addEventListener('click', startRound);

// function evaluate() {
// 	if (playerPick === compPick) {
// 		return "It's a draw!"
// 	} else if (playerPick === 'rock' && compPick === 'scissors') {
// 		return "You win!"
// 	} else if (playerPick === 'rock' && compPick === 'paper') {
// 		return "You lose!"
// 	} else if (playerPick === 'paper' && compPick === 'rock') {
// 		return "You Win!"
// 	} else if (playerPick === 'paper' && compPick === 'scissors') {
// 		return "You lose!"
// 	} else if (playerPick === 'scissors' && compPick === 'rock') {
// 		return "You lose!"
// 	} else if (playerPick === 'scissors' && compPick === 'paper') {
// 		return "You Win!"
// 	}
// }

// //create a restart button and append to the document
// let restartBtn = document.createElement('button');
// restartBtn.textContent = "Play Again!"
// restartBtn.setAttribute('id', "restart-btn");
// btnContainer.appendChild(restartBtn);
// restartBtn.style.display = "none";

// function restart() {

// 	img.setAttribute('src', `./imgs/q-mark.png`);
// 	compImg.setAttribute('src', `./imgs/q-mark.png`);

// 	startBtn.style.display = "inline-block";
// 	restartBtn.style.display = "none";
// 	message.textContent = "Let's Play!";
// }


// >>>>>>>>>>>>>>>> Clean Code <<<<<<<<<<<<<<<<<<<<

const img = document.querySelector('#your-default');
const compImg = document.querySelector('#ai-default');
const message = document.getElementById('message');
const startBtn = document.getElementById('play-btn');

const choices = ['rock', 'paper', 'scissors'];
let playerPick;
let compPick;

function handleButtonClick(event) {
  const button = event.target;
  img.setAttribute('src', `./imgs/${button.id}.png`);
  playerPick = button.value;
}

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

startBtn.addEventListener('click', startRound);

function startRound() {
	if (playerPick == undefined) {
		alert('Choose first!');
	} else {
		compPick = choices[Math.floor(Math.random() * 3)];
		compImg.setAttribute('src', `./imgs/${compPick}.png`);
		message.textContent = evaluate();
		playerPick = undefined;
		startBtn.style.display = "none";
		restartBtn.style.display = "inline-block";
	}
}

function evaluate() {
  if (playerPick === compPick) {
    return "It's a draw!";
  } else if ((playerPick === 'rock' && compPick === 'scissors') ||
             (playerPick === 'paper' && compPick === 'rock') ||
             (playerPick === 'scissors' && compPick === 'paper')) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function restart() {
  img.setAttribute('src', `./imgs/q-mark.png`);
  compImg.setAttribute('src', `./imgs/q-mark.png`);
  startBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  message.textContent = "Let's Play!";
}

const btnContainer = document.getElementById('play-restart');
const restartBtn = document.createElement('button');
restartBtn.textContent = "Play Again!";
restartBtn.setAttribute('id', "restart-btn");

btnContainer.appendChild(restartBtn);
restartBtn.style.display = "none";
restartBtn.addEventListener('click', restart);
