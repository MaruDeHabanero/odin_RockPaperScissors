let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const WIN = "You Win!";
const LOSE = "You Lose!";

const botones = document.querySelector(".button_container");
const computerChoiceParagraph = document.querySelector("#computerChoice");
const resultsDiv = document.querySelector("div.result_container");
// Inside resultsDiv
const victoryParagraph = document.createElement("h3");
const message = document.createElement("p");
const counter = document.createElement("p");
resultsDiv.appendChild(victoryParagraph);
resultsDiv.appendChild(message);
resultsDiv.appendChild(counter);

computerChoiceParagraph.style.cssText += 'color: red;'

botones.addEventListener('click', (e) => {
	//// Gonna need to research more about this.
	const boton = e.target.closest('button[id]'); // CSS Selector, every button with an ID attribute
	if (!boton) return;

	playGame(boton.id);
});

function getComputerChoice(){
	let computerChoice = Math.floor(Math.random() * 3);
	return choices[computerChoice];
}

function playGame(humanChoice){
	function playRound(computerChoice){
		if (humanChoice == computerChoice){
			victoryParagraph.textContent = "It's a TIE!";
			message.textContent = "";
			return;
		}
	
		// Lose statement
		// Win statement
	
		switch (humanChoice){
			case choices[0]:
				if (computerChoice == choices[1]){
					victoryParagraph.textContent = LOSE;
					message.textContent = "Rock loses to paper.";
					computerScore++;
				} else {
					victoryParagraph.textContent = WIN;
					message.textContent = "Rock destroys scissors.";
					humanScore++;
				}
				break;
	
			case choices[1]:
				if (computerChoice == choices[2]){
					victoryParagraph.textContent = LOSE;
					message.textContent = "Paper loses to scissors.";
					computerScore++;
				} else {
					victoryParagraph.textContent = WIN;
					message.textContent = "Paper covers rock.";
					humanScore++;
				}
				break;
	
			case choices[2]:
				if (computerChoice == choices[0]){
					victoryParagraph.textContent = LOSE;
					message.textContent = "Scissors loses to rock.";
					computerScore++;
				} else {
					victoryParagraph.textContent = WIN;
					message.textContent = "Scissors cut through paper.";
					humanScore++;
				}
				break;
			default:
				console.log("There's something wrong with humanChoice...");
				return;
		}
		
		counter.textContent = `Human: ${humanScore}\nComputer: ${computerScore}`
	}

	function checkScores(){
		if (humanScore < 5 && computerScore < 5) return;
		
		const winner = humanScore > computerScore ? "Human" : "Computer";

		// Selects all buttons from .button_container
		// It's read from right to left, for it to make sense lol
		document.querySelectorAll(".button_container button").forEach((button)=> {
			button.disabled = true;
		});

		const winnerParagraph = document.createElement("p");
		winnerParagraph.innerHTML = `<strong>${winner} wins!</strong>\nPlease reload the page to play again.`

		document.querySelector(".result_container").appendChild(winnerParagraph);
	}

	computer = getComputerChoice();
	computerChoiceParagraph.textContent = `Computer Choice: ${computer}`;

	playRound(computer);

	checkScores();
}