let humanScore = 0;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
	let computerChoice = Math.floor(Math.random() * 3);
	return choices[computerChoice];
}

function playGame(humanChoice){
	function playRound(computerChoice){
		if (humanChoice == computerChoice){
			console.log("It's a tie!")
			return;
		}
	
		// Lose statement
		// Win statement
	
		switch (humanChoice){
			case "rock":
				if (computerChoice == "paper"){
					console.log("You lose! Rock loses to paper.");
					computerScore++;
				} else {
					console.log("You win! Rock destroys scissors.");
					humanScore++;
				}
				break;
	
			case "paper":
				if (computerChoice == "scissors"){
					console.log("You lose! Paper loses to scissors.");
					computerScore++;
				} else {
					console.log("You win! Paper covers rock.");
					humanScore++;
				}
				break;
	
			case "scissors":
				if (computerChoice == "rock"){
					console.log("You lose! Scissors loses to rock.");
					computerScore++;
				} else {
					console.log("You win! Scissors cut through paper.")
					humanScore++;
				}
				break;
			default:
				console.log("There's something wrong with humanChoice...");
				return;
		}
	
		console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
	}

	function checkScores(){
		if (humanScore == computerScore){
			console.log("It's a tie! Nobody wins!");
		} else if (humanScore > computerScore) {
			console.log("Human wins!");
		} else {
			console.log("Computer wins!");
		}
	}

	computer = getComputerChoice();

	playRound(computer);

	// checkScores();
}

let botones = document.querySelector(".button_container");
	
botones.addEventListener('click', (e) => {
	const boton = e.target.closest('button[id]');
	switch(boton.id){
		case 'rock':
			playGame(choices[0]);
			break;
		case 'paper':
			playGame(choices[1]);
			break;
		case 'scissors':
			playGame(choices[2]);
			break;
	}
});
