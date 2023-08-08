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
    
    it("should store the computer's choice", async () => {
        //arrange
        const computersguess = "rock";

        //act
        const res = await chai.request(app).post('/turn').set('content-type', 'application/x-www-form-urlencoded').send({"computersguess": "rock"})

        //assert
        expect(res.text).to.include("The computer chooses: rock");
    })

 })