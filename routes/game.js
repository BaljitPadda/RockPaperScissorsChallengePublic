import Player from '../src/player.js';
import RockPaperScissors from '../src/rockpaperscissors.js';
import express from 'express';
export const router = express.Router();

router.post('/', (req, res) => {
    const player = new Player([req.body.playername]);
    const game = new RockPaperScissors(player);
    req.app.locals.game = game;
    res.render('game');
})


