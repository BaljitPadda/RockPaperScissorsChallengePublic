import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);

describe('turn router tests', () => { 

    it("should handle a 'post' request to the turn page", async () => {
    
        //arrange
        //act
        const res = await chai.request(app).post('/turn').send();

        //expect
        expect(res).to.have.status(200);

    })

    it("should display the player's choice", async () => {
        //arrange
        const playerSelection = "paper";
        //act
        const res = await chai.request(app).post('/turn').set('content-type', 'application/x-www-form-urlencoded').send({ "mySelection": playerSelection})

        //assert
        expect(res.text).to.include("Thanks for your choice! You chose: " + playerSelection);
    })

    
    it("should display the computer's choice", async () => {
        //arrange
        const playerSelection = "paper";
        //act
        const res = await chai.request(app).post('/turn').set('content-type', 'application/x-www-form-urlencoded').send({ "mySelection": playerSelection})

        //assert
        expect(res.text).to.include("The computer chooses:");
    })


      it("should display the game result", async () => {
        //arrange
        const playerSelection = "rock";
        //act
        const res = await chai.request(app).post('/turn').set('content-type', 'application/x-www-form-urlencoded').send({ "mySelection": playerSelection})

        //assert
        expect(res.text).to.include("Result = ");
    })
    

 })