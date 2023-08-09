import { expect } from "chai";
import RockPaperScissors from "../src/rockpaperscissors.js";

describe("RockPaperScissor class tests", () => {
    it("should generate the computer's choice from the generateComputerSelection() method", () => {

        //arrange
        const player = "Joe";
        const game = new RockPaperScissors(player);

        //act
        const result = game.generateComputerSelection();

        //assert
        expect(result).to.be.oneOf(["rock", "paper", "scissors"]);
    })

    it("should calculate the result of a game from the calculateResult() method", () => {

        //arrange
        const player = "Blogs";
        const game = new RockPaperScissors(player);

        //act
        const result1 = game.calculateResult("rock", "rock");
        const result2 = game.calculateResult("rock", "paper");
        const result3 = game.calculateResult("rock", "scissors");

        const result4 = game.calculateResult("paper", "paper");
        const result5 = game.calculateResult("paper", "rock");
        const result6 = game.calculateResult("paper", "scissors");

        const result7 = game.calculateResult("scissors", "scissors");
        const result8 = game.calculateResult("scissors", "rock");
        const result9 = game.calculateResult("scissors", "paper");

        //assert
        expect(result1).to.equal("It's a tie!");
        expect(result2).to.equal("Computer wins!");
        expect(result3).to.equal("You win!");

        expect(result4).to.equal("It's a tie!");
        expect(result5).to.equal("You win!");
        expect(result6).to.equal("Computer wins!");

        expect(result7).to.equal("It's a tie!");
        expect(result8).to.equal("Computer wins!");
        expect(result9).to.equal("You win!");

    })

})