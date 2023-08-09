import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);

describe('index router tests', () => {

    it("should handle a 'get' request to '/' http://localhost:3000", async () => {

        //arrange
        //act
        const res = await chai.request(app).get('/').send();

        //expect
        expect(res).to.have.status(200);

    })

})