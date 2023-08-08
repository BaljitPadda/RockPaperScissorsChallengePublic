import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);

describe('game router tests', () => { 

    it("should handle a 'post' request to the game page", async () => {
    
        //arrange
        //act
        const res = await chai.request(app).post('/game').send();

        //expect
        expect(res).to.have.status(200);

    })
    
    it("should store a player's name", async () => {

        //arrange
        const playername = "Spidey";

        //act
        const res = await chai.request(app).post('/game').set('content-type', 'application/x-www-form-urlencoded').send({ "playername": "Spidey" });

        //assert
        expect(res.text).to.include("Let's play Spidey !");

    })

 })