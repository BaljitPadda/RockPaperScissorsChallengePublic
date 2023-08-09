import express from 'express';
export const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.game;

    if (req.body.mySelection == 'undefined') {
        res.status(400).send("Select one option to proceed");
    } else {
        game.turn(req.body.mySelection);
        res.render('turn');
    }

});