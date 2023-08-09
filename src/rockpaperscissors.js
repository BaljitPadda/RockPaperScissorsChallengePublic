class RockPaperScissors {

    constructor(player) {
      this.player = player;
      this.result = "";
      this.computerSelection = "";
  }
  
  turn(playerSelection) {
    this.player.playerSelection = playerSelection;
    this.computerSelection = this.generateComputerSelection();
    this.result = this.calculateResult(playerSelection, this.computerSelection);
  }

    generateComputerSelection () {
      let number = Math.floor(Math.random() * 3);
    if (number == 0) return "rock";
    if (number == 1) return "paper";
    if (number == 2) return "scissors";
 }

   calculateResult (mySelection, computerSelection) {
    if (mySelection  == computerSelection) return ("It's a tie!")
    if (mySelection == "rock" && computerSelection == "paper") return ("Computer wins!")
    if (mySelection == "paper" && computerSelection == "scissors") return ("Computer wins!")
    if (mySelection == "scissors" && computerSelection == "rock") return ("Computer wins!")
    else return ("You win!")
 }
    
}

export default RockPaperScissors;