function stringChoice(choice){
	if (isNaN(choice)) return undefined;
	switch (choice){
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
	return undefined;
}

function getComputerChoice(){
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	return stringChoice(computerChoice);
}

function getHumanChoice(){
	let humanChoice = Number(prompt("1. Rock\n2. Paper\n3. Scissors"));
	return stringChoice(humanChoice);
}
