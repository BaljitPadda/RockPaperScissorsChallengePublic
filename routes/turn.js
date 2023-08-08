import express from 'express';
export const router = express.Router();

router.post('/', (req, res) => {
    req.app.locals.myselection = req.body.myselection;
    let computersguess = computerselection();
    req.app.locals.computerselection = computersguess;
    req.app.locals.result = result(req.body.myselection, computersguess);
    res.render('turn');

});

 function computerselection() {
     let number = Math.floor(Math.random() * 3);
     let computerselection;
    if (number == 0) return computerselection = "rock";
    else if (number == 1) return computerselection = "paper";
    else if (number == 2) return computerselection = "scissors";
 }

function result(myselection, computerselection) {
    if (myselection  == computerselection) return ("It's a tie!")
     else if (myselection == "rock" && computerselection == "paper") return ("Computer wins!")
     else if (myselection == "paper" && computerselection == "scissors") return ("Computer wins!")
     else if (myselection == "scissors" && computerselection == "rock") return ("Computer wins!")
     else return ("You win!")
 }
