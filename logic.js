let humanScore = 0;
let computerScore = 0;

function stringChoice(choice){
	switch (choice){
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
		default:
			return undefined;
	}
}

function getComputerChoice(){
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	return stringChoice(computerChoice);
}

function getHumanChoice(){
	let humanChoice = Number(prompt("Please enter an integer!\n1. Rock\n2. Paper\n3. Scissors"));
	return stringChoice(humanChoice);
}

function playGame(){
	function playRound(humanChoice, computerChoice){
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

	let humanChoice = "";
	let computerChoice = "";

	for (let i = 0; i < 5; i++){
		human = getHumanChoice();
		computer = getComputerChoice();

		playRound(human, computer);
	}

	checkScores();
}

playGame();